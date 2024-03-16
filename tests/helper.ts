//
// Aeca
//
// Copyright (c) 2024 Aeca
//

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
