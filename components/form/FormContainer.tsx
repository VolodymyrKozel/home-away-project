"use client";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

interface FormContainerProps {
  children: React.ReactNode;
  action: actionFunction;
}

const FormContainer = ({ children, action }: FormContainerProps) => {
  const [state, formAc] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);
  return <form action={formAc}>{children}</form>;
};

export default FormContainer;
