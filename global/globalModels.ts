export type Notification = {
  title: string;
  paragraphs: Paragraph[];
  base64Image: string;
};

export type Paragraph = {
  para: string;
  base64Image: string;
};

export type CardProps = {
  title: string;
  imagePath: string;
};
