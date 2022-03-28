import {join} from 'node:path';
import {renameSync, readdirSync} from 'node:fs';
import {getAddress} from '@ethersproject/address';

const BASE_DIR = './logos';

const dirs = readdirSync(BASE_DIR).filter(name => name !== getAddress(name));

for (const name of dirs) {
	renameSync(join(BASE_DIR, name), join(BASE_DIR, getAddress(name)));
}
