# brewlounge

커피 큐레이션 서비스. MVP까지 만들고 중단됐던 프로젝트를 솔로로 부활 중. 기존 Spring 서버는 다운, 부활 방향은 Next.js API 라우트로 백엔드 흡수.

## 프로젝트 컨텍스트

- **API 계약**: [.claude/docs/api.md](.claude/docs/api.md) — 4개 GET 엔드포인트 (리스트/상세/추천/지역)
- **API 라우트 구현 명세**: [.claude/docs/api-routes.md](.claude/docs/api-routes.md) — 핸들러별 JSON 소스 + 필터/페이지네이션 로직
- **도메인 모델**: [.claude/docs/domain.md](.claude/docs/domain.md) — Cafe / CoffeeBean / Menu / Tag / Area
- **큐레이션 기준**: [.claude/docs/editorial.md](.claude/docs/editorial.md) — 카페 선정 6기준 + 유저 페르소나
- **KCRC 2024 수상자**: [.claude/docs/awards-kcrc-2024.md](.claude/docs/awards-kcrc-2024.md) — "KCRC 수상" 태그 판별용
- **이미지 전략**: [.claude/docs/image-strategy.md](.claude/docs/image-strategy.md) — Google Places Photos + Approach A (분류 생략)
- **디자인 컨벤션**: [.claude/docs/design-conventions.md](.claude/docs/design-conventions.md) — vanilla-extract · 색/타이포 토큰 · rem 1=10px · 모바일 50rem 레이아웃
- **프로젝트(협업) 컨벤션**: [GitHub 위키](https://github.com/YAPP-Github/25th-Web-Team-3-FE/wiki) — 브랜치/커밋/PR/폴더 규칙
- **도메인 문서 원본**: Notion. 필요할 때 Notion MCP로 조회.

## 데이터 흐름

원본은 **Notion**. `public/data/*.json`은 손으로 고치는 게 아니라 빌드 산출물이다 — **JSON 직접 편집 금지, 스크립트 재실행으로 갱신**.

```
Notion ──(npm run build:data)──▶ public/data/{cafes-raw,cafes,areas,recommend}.json + details/<id>.json
cafes.json ──(npm run enrich:images)──▶ public/data/image-enrichment.json  (Google Places 사진)
build:data 는 image-enrichment.json 이 있으면 읽어서 details 에 사진을 합친다
```

- 스크립트는 `scripts/`(+`scripts/lib`의 `transform`/`normalize`/`groups`)에 있고 `tsx --env-file=.env.local`로 실행. env: `NOTION_TOKEN`, `NOTION_CAFE_DS_ID`(build:data), `GOOGLE_MAPS_API_KEY`(enrich:images).
- 사진까지 반영하려면 **2-pass**: `build:data`(cafes.json 생성) → `enrich:images`(사진 맵 생성) → `build:data` 재실행(사진 병합).
- 소비: API 라우트 `src/app/api/v1/cafes/route.ts`는 `cafes.json`을 import, SSG 페이지는 `details/<id>.json`·`areas.json`·`recommend.json`을 읽는다.
- `cafes-raw.json`은 Notion 원본 덤프(디버그용), 소비 대상 아님.

## 렌더링 전략

- 정적 우선. 상세 페이지(`(withoutNav)/cafes/[id]`)는 `generateStaticParams`로 **빌드 시 SSG**, `CAFE_DETAIL_REVALIDATE_TIME`(`constants/revalidateTime.ts`, 현재 5시간) 기반 ISR.
- 데이터는 런타임 `fetch`가 아니라 **빌드 시점에 `public/data/*.json`을 읽어** 생성한다. 새 페이지도 클라 fetch보다 정적 생성 우선으로 짠다.

## 상태 관리

- 서버 상태 = **react-query**(`src/hooks/server`, `src/apis`의 fetcher), 클라 UI 상태 = **zustand**(`src/store`).
- **북마크는 서버가 없다.** zustand `persist`로 `localStorage`(키 `bookmark-storage`)에만 저장(`store/store.ts`). 서버 동기화로 오해하지 말 것.

## 이미지 / SVG

- `next/image` 사용, 포맷 avif·webp. 외부 이미지 호스트는 `next.config.ts`의 `remotePatterns` 화이트리스트(placehold.co, opendata.mofa.go.kr=국기, github.com)에만 허용 — **새 호스트는 여기 추가**.
- blur 플레이스홀더는 plaiceholder(`@plaiceholder/next`).
- SVG는 `@svgr/webpack`로 **React 컴포넌트로 import**한다: `import Icon from './x.svg'` (`src/assets/Icon`).

## 작업 규칙

- **브랜치 컨벤션**: 작업 전 GitHub 이슈를 하나 파고, 그 이슈 번호를 접미사로 브랜치를 만든다. 포맷은 `<type>/#<이슈번호>` (예: `feat/#56`). `<type>` 종류 등 세부 규칙은 위키 [킥오프-회의 › 브랜치 전략](https://github.com/YAPP-Github/25th-Web-Team-3-FE/wiki/킥오프-회의)이 정본.
- **PR/리뷰**: 흐름은 이슈 → 브랜치 → `main`으로 PR → 리뷰·점검 후 머지 (정본: 위키 [킥오프-회의 › 코드리뷰](https://github.com/YAPP-Github/25th-Web-Team-3-FE/wiki/킥오프-회의)). PR 본문은 `.github/pull_request_template.md` 따름 — `## 작업 내용` + `## 연관 이슈`에 `close #<이슈번호>`로 이슈를 닫는다. (위키의 "모든 PR 리뷰"는 팀 전제 규칙 — 솔로 부활 중이므로 셀프 리뷰로 운용.)
- **best-practice 패턴 적용 시 근거 자동 설명**: react-best-practices / web-design-guidelines 등 스킬 패턴을 적용·제안할 때는 묻지 않아도 매번 근거를 함께 설명한다. 형식(상세 모드): 각 변경마다 `규칙명 (impact)` → **왜**(메커니즘) → `❌ before / ✅ after` → **트레이드오프/언제 안 쓰는지**. 목적은 적용이 아니라 학습이므로 적용은 부산물로 다룬다. 패턴이 이 프로젝트 맥락(SSG·정적 데이터 등)에 안 맞으면 그 이유까지 짚고 적용하지 않는다.

## 경로 상수 & 알려진 함정

- 경로 문자열 하드코딩 금지, `ROUTE_PATH`(`constants/routePath.ts`) 사용.
- ⚠️ `ROUTE_PATH`는 **페이지 경로와 API 경로가 섞여** 있다. 페이지 링크는 `` `${ROUTE_PATH.cafes}/${id}` `` → `/cafes/<id>`(실제 라우트 `cafes/[id]`)인데, `ROUTE_PATH.cafesDetail`('/cafes/details')은 페이지가 아니라 `apis/cafeDetail.ts`의 **API fetch 경로**다. 둘을 혼동하지 말 것.
- ⚠️ `src/styles/typo.css.ts`의 `h1`은 `fontWeight`에 size 토큰이 들어간 버그(`fontWeight: fontVars.fontSize.title1`). 새 코드에서 복붙 금지.
