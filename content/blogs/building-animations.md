---
title: Building Smooth Animations in React
date: 2025-10-01
summary: Practical tips for motion that feels premium.
cover: https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80
---

Motion should guide attention and communicate structure.

```tsx
import { motion } from 'framer-motion'

export function Example() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      Content
    </motion.div>
  )
}
```

Use shorter durations for micro-interactions and slightly longer for section transitions. Always test on low-end devices.


