import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export const ComplexitySlider = ({ value, onChange }: Props) => {
  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="n-slider">Valor máximo de n</Label>
        <span className="text-muted-foreground text-sm">
          {value}
        </span>
      </div>

      <Slider
        id="n-slider"
        value={[value]}
        onValueChange={(val) => onChange(val[0])}
        min={1}
        max={1000}
        step={1}
      />
    </div>
  );
};