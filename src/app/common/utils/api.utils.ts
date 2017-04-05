import { Md5 } from 'ts-md5/dist/md5';

function timestamp() {
    return Date.now();
}

function createHash(ts, privkey, pubkey) {
    const preHash = ts + privkey + pubkey;

    return Md5.hashStr(preHash);
}

export { timestamp, createHash };
