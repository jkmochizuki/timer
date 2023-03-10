const timers = process.argv.slice(2, process.argv.length);

for (const time of timers) {
  if (Number(time) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // system sound (beep/ding)
    }, time * 1000);
  }
}