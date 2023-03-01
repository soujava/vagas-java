export class Vaga {
  id: number;
  number: number;
  title: String;
  body: string;
  labels: { name: string }[];
  username: string;
  password: string;

  private static labelsToHiding: string[] = ["job opportunity"];

  public static getLabels(labels: { name: string }[] = []): string {
    if (!labels) return "";
    let labelMap = labels
      .map((a) => a.name)
      .filter((a) => Vaga.labelsToHiding.indexOf(a.toLowerCase()) == -1);
    if (labelMap.length > 0) {
      return labelMap.reduce((a, b) => a + ", " + b);
    }
  }
}
