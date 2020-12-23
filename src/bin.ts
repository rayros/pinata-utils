#!/usr/bin/env node

import program from 'commander';
import { pinByHashToName } from '.';

program
  .command('pinByHashToName <hash> <name>')
  .description('Pin by hash to name. If hash exist under that name then replace (unpin hash set before).')
  .action((hash: string, name: string) => {
    pinByHashToName(hash, name).catch(console.error);
  })

program.parse(process.argv);
