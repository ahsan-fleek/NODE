import chalk from "chalk";

type LogFn = (msg?: string | number) => void;

export const log: Record<
  'success' | 'error' | 'info' | 'warn' | 'line' | 'blank' | 'title',
  LogFn
> = {
  success: (msg) => console.log(chalk.white.bgGreen.bold(String(msg))),
  error: (msg) => console.log(chalk.white.bgRed.bold(String(msg))),
  info: (msg) => console.log(chalk.cyan(String(msg))),
  warn: (msg) => console.log(chalk.yellow(String(msg))),
  line: () => console.log( chalk.gray("─".repeat(Math.max(process.stdout.columns ?? 40, 40)))),
  blank: (lines: number = 1) => console.log("\n".repeat(lines)),
  title: (msg) => console.log(chalk.white.bgCyan.bold(msg)),
};
