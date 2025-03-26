import { FadeIn } from "./FadeIn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Fares = () => {
  const { t } = useTranslation();
  const individualPrices = [
    { weight: "weight_1_to_2kg", price: "106.00 €" },
    { weight: "weight_2_to_20kg", price: "150.00 €" },
    { weight: "weight_20_to_45kg", price: "240.00 €" },
    { weight: "weight_45_to_65kg", price: "340.00 €" },
    { weight: "weight_65kg_above", price: "400.00 €" },
  ];

  const collectivePrices = [
    { weight: "weight_1_to_2kg", price: "57.00 €" },
    { weight: "weight_2_to_20kg", price: "76.00 €" },
    { weight: "weight_20_to_45kg", price: "109.00 €" },
    { weight: "weight_45_to_65kg", price: "208.00 €" },
    { weight: "weight_65kg_above", price: "252.00 €" },
  ];

  return (
    <section id="fares" className="py-20 bg-secondary/50">
      <div className="container-xl">
        <FadeIn direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">{t("fares.title")}</h2>
            <p className="body-base max-w-3xl mx-auto">
              {t("fares.description")}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FadeIn direction="up" delay={200}>
            <Card className="shadow-soft overflow-hidden border-t-4 border-t-orange-500">
              <CardHeader className="bg-orange-500 text-white text-center py-3">
                <CardTitle>{t("fares.individual_cremation")}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/20">
                      <TableHead className="w-[60%] text-center font-bold text-foreground">
                        {t("fares.weight")}
                      </TableHead>
                      <TableHead className="w-[40%] text-center font-bold text-foreground">
                        {t("fares.price")}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {individualPrices.map((row, index) => (
                      <TableRow
                        key={index}
                        className={index % 2 === 0 ? "bg-muted/10" : ""}
                      >
                        <TableCell className="text-center font-medium">
                          {t(`fares.${row.weight}`)}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <Card className="shadow-soft overflow-hidden border-t-4 border-t-orange-500">
              <CardHeader className="bg-orange-500 text-white text-center py-3">
                <CardTitle>{t("fares.collective_cremation")}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/20">
                      <TableHead className="w-[60%] text-center font-bold text-foreground">
                        {t("fares.weight")}
                      </TableHead>
                      <TableHead className="w-[40%] text-center font-bold text-foreground">
                        {t("fares.price")}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {collectivePrices.map((row, index) => (
                      <TableRow
                        key={index}
                        className={index % 2 === 0 ? "bg-muted/10" : ""}
                      >
                        <TableCell className="text-center font-medium">
                          {t(`fares.${row.weight}`)}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={400}>
          <div className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            <p>{t("fares.additional_info")}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Fares;
