import React, {useState } from "react";
import {
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  DatePicker,
} from "@nextui-org/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

const DropdownRH = () => {
  // State to manage filters
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [department, setDepartment] = useState(null);
  const [position, setPosition] = useState(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to reset all filters
  const handleReset = () => {
    setDateRange({ from: null, to: null });
    setDepartment(null);
    setPosition(null);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen} placement="bottom-end">
      <DropdownTrigger className="hidden sm:flex">
        <Button
          startContent={<AdjustmentsHorizontalIcon className="h-4 w-4" />}
          variant="shadow"
        >
          Filtre
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Table filter"
        closeOnSelect={false}
      >
        <DropdownItem variant="light" showDivider>
          <div className="font-medium">Filter</div>
        </DropdownItem>
        <DropdownItem variant="light">
          <div className="flex items-center justify-between w-full">
            <div className="text-small font-normal">Date range</div>
            <a
              className="text-primary hover:font-semibold cursor-pointer"
              onClick={() => setDateRange({ from: null, to: null })}
            >
              Reset
            </a>
          </div>
        </DropdownItem>
        <DropdownItem variant="light" showDivider>
          <div className="flex flex-row">
            <div className="pr-4">
              <DatePicker
                label={"from:"}
                className="min-w-[160px]"
                labelPlacement="outside"
                value={dateRange.from}
                onChange={(date) =>
                  setDateRange((prev) => ({ ...prev, from: date }))
                }
              />
            </div>
            <DatePicker
              label={"to:"}
              className="min-w-[160px]"
              labelPlacement="outside"
              value={dateRange.to}
              onChange={(date) =>
                setDateRange((prev) => ({ ...prev, to: date }))
              }
            />
          </div>
        </DropdownItem>
        
        <DropdownItem variant="light">
          <div className="flex justify-between">
            <Button color="primary" variant="bordered" onClick={handleReset}>
              Reset
            </Button>
            <Button color="primary" onClick={handleIsOpen}>
              Apply
            </Button>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownRH;
