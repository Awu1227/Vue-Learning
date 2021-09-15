- 前者setup只会被调用一次，而后者函数会被多次调用
  
- 前者无需useMemo useCallback，因为setup只调用一次

- 前者无需顾虑调用顺序，而后者需要保证hooks的顺序一致

- 前者reactive + ref比后者useState，要难理解