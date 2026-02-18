import { useMemo, useState } from 'react';

import { complexityMap } from '@/utils/complexityFunctions';
import { ComplexitySelector } from '@/components/charts/ComplexitySelector';
import { ComplexityChart } from '@/components/charts/ComplexityChart';

import type { ComplexityType } from '@/types/ComplexityType';

type ChartData = {
  n: number;
} & Partial<Record<ComplexityType, number>>;

export function Home() {
  const [selected, setSelected] = useState<ComplexityType[]>([
    'O(n)',
  ]);

  const toggle = (value: ComplexityType) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const data = useMemo<ChartData[]>(() => {
    const arr: ChartData[] = [];

    for (let n = 1; n <= 20; n++) {
      const row: ChartData = { n };

      selected.forEach((complexity) => {
        row[complexity] = complexityMap[complexity](n);
      });

      arr.push(row);
    }

    return arr;
  }, [selected]);

  return (
    <div className='space-y-6 p-6'>
      <ComplexitySelector
        selected={selected}
        toggle={toggle}
      />

      <ComplexityChart
        data={data}
        selectedComplexities={selected}
      />
    </div>
  );
}
