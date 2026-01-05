'use client';

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const siteId = 6613364;
const hotjarVersion = 6;

export function Analytics() {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return null;
}
