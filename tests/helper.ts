//
// Cognica
//
// Copyright (c) 2025 Cognica
//

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
