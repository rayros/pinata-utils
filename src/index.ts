const pinataSDK = require('@pinata/sdk');

export const pinByHashToName = async (hash: string, name: string) => {
  const pinata = pinataSDK(process.env.PINATA_KEY, process.env.PINATA_SECRET);
  const list = await pinata.pinList({
    status: 'pinned',
    metadata: {
      name
    }
  });
  for (const item of list.rows) {
    await pinata.unpin(item.ipfs_pin_hash);
  }
  await pinata.pinByHash(hash, {
    pinataMetadata: {
      name
    }
  });
}