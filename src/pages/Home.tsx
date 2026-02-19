import {
  useMemo,
  useState
} from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/ui/card';

import { Button } from '../components/ui/button';
import type { ComplexityType } from '../types/ComplexityType';
import { complexityMap } from '../utils/complexityFunctions';
import { ComplexitySelector } from '../components/charts/ComplexitySelector';
import { ComplexityChart } from '../components/charts/ComplexityChart';
import { RotateCcw } from 'lucide-react';

type ChartData = {
  n: number;
} & Partial<Record<ComplexityType, number>>;

export function Home() {
  const [selected, setSelected] = useState<ComplexityType[]>(['O(n)']);

  const toggle = (value: ComplexityType) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const reset = () => {
    setSelected(['O(n)']);
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
    <div className='bg-muted/40 p-4 md:p-8 flex justify-center'>
      <div className='w-full max-w-6xl space-y-4 md:space-y-6'>

        <div className='space-y-2'>
          <h1 className='text-xl md:text-3xl font-bold tracking-tight'>
            Visualizador Assintótico
          </h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            Compare visualmente a complexidade temporal dos algoritmos.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className='text-base md:text-xl'>
              Complexidades selecionadas
            </CardTitle>
            <CardDescription className='text-sm md:text-base'>
              Escolha quais curvas de complexidade você deseja visualizar.
            </CardDescription>
          </CardHeader>

          <CardContent className='space-y-4'>
            <ComplexitySelector
              selected={selected}
              toggle={toggle}
            />

            <Button variant='outline' onClick={reset}>
              <RotateCcw />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-base md:text-xl'>
              Gráfico de crescimento da complexidade
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ComplexityChart
              data={data}
              selectedComplexities={selected}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
