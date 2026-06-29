import {
  DeleteButton,
  SaveButton,
  Toolbar,
  type DeleteButtonProps,
} from "react-admin";

type AdminToolbarProps = {
  deleteProps?: DeleteButtonProps;
};

export function AdminToolbar({ deleteProps }: AdminToolbarProps) {
  return (
    <Toolbar>
      <SaveButton />
      <DeleteButton mutationMode="pessimistic" {...deleteProps} />
    </Toolbar>
  );
}

