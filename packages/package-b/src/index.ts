import { greet } from "@monorepo/package-a";

export function welcomeMessage(): string {
  return `${greet("User")} This is package B.`;
}

console.log(welcomeMessage());