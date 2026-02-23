import { Checkbox } from '../ui/checkbox';
import type { ComplexityType } from '../../types/ComplexityType';

type Props = {
  selected: ComplexityType[];
  toggle: (value: ComplexityType) => void;
};

const options: ComplexityType[] = [
  'O(1)',
  'O(log n)',
  'O(n)',
  'O(n log n)',
  'O(n²)',
  'O(2ⁿ)',
];

export const ComplexitySelector = ({
  selected,
  toggle
}: Props) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {options.map((option) => (
        <div key={option} className='flex items-center gap-2'>
          <Checkbox
            checked={selected.includes(option)}
            onCheckedChange={() => toggle(option)}
          />
          <label className='text-sm font-medium'>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}
