import { ReactNode } from "react";

export interface Pattern {
    name: string;
    getScore: (children: any[]) => { score: number; priority: number };
    buildComponents: (children: any[]) => ReactNode;
  }

export const patterns: Pattern[] = [];

export function registerPattern(pattern:Pattern){
    patterns.push(pattern)
}

export function createPattern(name: string, scoreFn: any, buildFn: any): Pattern {
    return {
      name,
      getScore: scoreFn,
      buildComponents: buildFn,
    };
  }