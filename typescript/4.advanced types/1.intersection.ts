type FileData = {
  path: string;
  content: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AcessedFileData = FileData & Status;
