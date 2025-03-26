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
import { Clock, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Schedules = () => {
  const { t } = useTranslation();
  const pickupTimes = [
    {
      days: t("schedules.monday_to_friday"),
      hours: t("schedules.time_9_to_21"),
    },
    { days: t("schedules.saturdays"), hours: t("schedules.time_9_to_14") },
    { days: t("schedules.emergency"), hours: t("schedules.time_emergency") },
  ];

  return (
    <section id="schedules" className="py-20">
      <div className="container-xl max-w-4xl">
        <FadeIn direction="up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">{t("schedules.title")}</h2>
            <p className="body-base max-w-3xl mx-auto">
              {t("schedules.description")}
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <Card className="shadow-soft overflow-hidden border-t-4 border-t-orange-500 max-w-2xl mx-auto">
            <CardHeader className="bg-orange-500 text-white text-center py-3 flex flex-row items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              <CardTitle>{t("schedules.pickup_title")}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-muted/20">
                    <TableHead className="w-[50%] text-center font-bold text-foreground">
                      {t("schedules.days")}
                    </TableHead>
                    <TableHead className="w-[50%] text-center font-bold text-foreground">
                      {t("schedules.hours")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pickupTimes.map((row, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? "bg-muted/10" : ""}
                    >
                      <TableCell className="text-center font-medium">
                        {row.days}
                      </TableCell>
                      <TableCell className="text-center">{row.hours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn direction="up" delay={300}>
          <div className="mt-12 text-center flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 text-accent">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">
                {t("schedules.special_availability")}
              </span>
            </div>
            <p className="body-base max-w-xl">
              {t("schedules.special_availability_description")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Schedules;
