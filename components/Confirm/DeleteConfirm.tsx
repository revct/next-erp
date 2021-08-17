import { Button, ButtonGroup } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { useState } from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  onConfirm: Function;
}

const DeleteConfirm = (props: IProps = { onConfirm: () => {} }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [isLoading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await props.onConfirm();
    } finally {
      onClose();
      setLoading(false);
    }
  };
  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>提示</PopoverHeader>
        <PopoverBody>确定删除？</PopoverBody>
        <PopoverFooter d="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            <Button variant="outline" onClick={onClose}>
              取消
            </Button>
            <Button
              colorScheme="red"
              isLoading={isLoading}
              onClick={handleConfirm}
            >
              确定
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default DeleteConfirm;
