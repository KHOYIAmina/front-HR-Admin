import React, { useState, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RHPropsModel, AddEmployeSelect } from "../../constants/constants";

export default function ModelEmploye({
  buttonName,
  title,
  inputBodyList,
  selectBodyList = [],
  actionName,
}: RHPropsModel) {
  const [currentModal, setCurrentModal] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [selectValues, setSelectValues] = useState<{
    [key: string]: Set<string>;
  }>({});

  const handleInputChange = useCallback((label: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }));
  }, []);

  const handleSelectChange = useCallback(
    (label: string, value: Set<string>) => {
      setSelectValues((prevValues) => ({
        ...prevValues,
        [label]: value,
      }));
    },
    []
  );

  const handleActionClick = () => {
    if (currentModal === 1 && selectBodyList.length > 0) {
      setCurrentModal(2);
    } else {
      console.log("Input Values:", inputValues);
      const readableSelectValues = Object.entries(selectValues)
        .map(([label, values]) => {
          const items = values
            ? Array.from(values)
                .map((value) => getSelectValueLabel(label, value))
                .join(", ")
            : "";
          return `${label}: ${items}`;
        })
        .join("\n");

      console.log("Readable Select Values:", readableSelectValues);

      handleCloseModal();
      onOpenChange(false);
    }
  };

  const handlePreviousClick = () => {
    setCurrentModal(1);
  };

  // Reset state and close modal
  const handleCloseModal = () => {
    setCurrentModal(1);
    setInputValues({});
    setSelectValues({});
    onOpenChange(false);
  };

  // Function to get the label of selected values
  const getSelectValueLabel = (selectLabel: string, value: string) => {
    const selectItem = selectBodyList.find(
      (item) => item.label === selectLabel
    );
    return selectItem?.items[parseInt(value, 10)] || value;
  };

  return (
    <>
      <Button
        color="primary"
        onPress={onOpen}
        startContent={<PlusIcon className="h-4 w-4 " />}
      >
        {buttonName}
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={handleCloseModal}
        classNames={{
          backdrop: "bg-gradient-to-t backdrop-opacity-30",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {currentModal === 1 && (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {title}
                  </ModalHeader>
                  <ModalBody>
                    {inputBodyList.map((item, index) => (
                      <Input
                        key={index}
                        autoFocus={item.autoFocus}
                        label={item.label}
                        placeholder={item.placeholder}
                        variant="bordered"
                        className="mb-4"
                        value={inputValues[item.label] || ""}
                        onChange={(e) =>
                          handleInputChange(item.label, e.target.value)
                        }
                      />
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={handleActionClick}>
                      {selectBodyList && selectBodyList.length > 0
                        ? "suivant"
                        : actionName}
                    </Button>
                  </ModalFooter>
                </>
              )}
              {selectBodyList &&
                selectBodyList.length > 0 &&
                currentModal === 2 && (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Information professionnelle
                    </ModalHeader>
                    <ModalBody>
                      {selectBodyList.map((item, index) => (
                        <Select
                          key={index}
                          label={item.label}
                          placeholder={item.placeholder}
                          selectedKeys={selectValues[item.label] || new Set()}
                          onSelectionChange={(value) =>
                            handleSelectChange(item.label, value as Set<string>)
                          }
                        >
                          {item.items.map((option, idx) => (
                            <SelectItem key={idx} value={idx.toString()}>
                              {option}
                            </SelectItem>
                          ))}
                        </Select>
                      ))}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onPress={handlePreviousClick}>
                        Précédent
                      </Button>
                      <Button color="primary" onPress={handleActionClick}>
                        {actionName}
                      </Button>
                    </ModalFooter>
                  </>
                )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
