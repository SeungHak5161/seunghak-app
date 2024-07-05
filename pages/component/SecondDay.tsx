import { Select, SelectItem, SelectSection } from "@nextui-org/react";

export default function SecondDay() {
  const options1 = [
    {
      label: "Option-1  1",
      value: "option-1 1",
      key: "option-1 1",
    },
    {
      label: "Option-1  2",
      value: "option-1 2",
      key: "option-1 2",
    },
    {
      label: "Option-1  3",
      value: "option-1 3",
      key: "option-1 3",
    },
  ];

  const options2 = [
    {
      label: "Option-2 1",
      value: "option-2 1",
      key: "option-2 1",
    },
    {
      label: "Option-2 2",
      value: "option-2 2",
      key: "option-2 2",
    },
    {
      label: "Option-2 3",
      value: "option-2 3",
      key: "option-2 3",
    },
  ];
  return (
    <>
      <Select
        label="choose option1"
        classNames={{
          trigger: [
            "bg-white",
            "border-1",
            "data-[focus=true]:border-codeit_purple data-[focus=true]:border-1",
            "data-[open=true]:rounded-b-none data-[open=true]:border-codeit_purple₩ data-[open=true]:border-1",
            "listbox: padding-0",
          ],
          popoverContent: ["data-[open=true]:rounded-t-none", "-translate-y-1"],
          selectorIcon: ["!duration"],
          // listbox: ["p-0"],
        }}
      >
        <SelectSection
          classNames={{
            base: [
              "mb-0",
              "p-0",
              "[&_li]:border-1",
              "[&_li]:w-100%",
              "[&_li]:rounded-none",
            ],
          }}
        >
          {options1.map((option) => (
            <SelectItem key={option.key} className="text-gray-500">
              {option.label}
            </SelectItem>
          ))}
        </SelectSection>
      </Select>

      {/* <Select
        label="choose option2"
        className="focus:border-codeit_purple focus:border-2"
      >
        {options2.map((option) => (
          <SelectItem key={option.key} className="text-gray-500">
            {option.label}
          </SelectItem>
        ))}
      </Select> */}
    </>
  );
}
