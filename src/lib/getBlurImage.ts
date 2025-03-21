import { getPlaiceholder } from 'plaiceholder';

const getBlurImg = async (imgSrc: string): Promise<string> => {
  const buffer = await fetch(imgSrc).then(async (res) => Buffer.from(await res.arrayBuffer()));
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
};

export default getBlurImg;
