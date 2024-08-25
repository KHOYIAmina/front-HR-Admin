import React from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { backdropType, modalPlacementDialog } from "../constants/constants";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  titleDialog?: string;
  bodyDialog: string;
  icon?: React.ReactNode;
  width: string;
  modalPlacement?: modalPlacementDialog;
  classNameIcon?: string;
  classNameTitle?: string;
  classNameBody?: string;
  backdrop?: backdropType;
  hideCloseButton?: boolean;
}

export default function Dialog({
  isOpen,
  onClose,
  titleDialog,
  bodyDialog,
  width,
  modalPlacement,
  icon,
  classNameIcon,
  classNameTitle,
  classNameBody,
  backdrop,
  hideCloseButton,
}: Props) {
  return (
    <Modal
      backdrop={backdrop}
      isOpen={isOpen}
      onClose={onClose}
      placement={modalPlacement}
      hideCloseButton={hideCloseButton}
    >
      <ModalContent className={`max-w-md ${width}`}>
        <ModalBody className="text-base">
          <div className={classNameIcon}>
            {icon && (
              <motion.div
                initial={{ scale: 2 }}
                animate={{ rotate: 180, scale: 1.25 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {icon}
              </motion.div>
            )}
          </div>
          <h2 className={classNameTitle}>{titleDialog}</h2>
          <p className={classNameBody}>{bodyDialog}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
