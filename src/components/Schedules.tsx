
import { FadeIn } from './FadeIn';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

const Schedules = () => {
  const pickupTimes = [
    { days: 'LUNES A VIERNES', hours: '09:00 - 21:00' },
    { days: 'SÁBADOS', hours: '09:00 - 14:00' },
    { days: 'URGENCIAS', hours: '30 €' },
  ];

  return (
    <section id="schedules" className="py-20">
      <div className="container-xl max-w-4xl">
        <FadeIn direction="up" delay={100}>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Horarios de Servicio</h2>
            <p className="body-base max-w-3xl mx-auto">Nuestros horarios de atención al cliente son:</p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <Card className="shadow-soft overflow-hidden border-t-4 border-t-orange-500 max-w-2xl mx-auto">
            <CardHeader className="bg-orange-500 text-white text-center py-3 flex flex-row items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              <CardTitle>HORARIOS DE RECOGIDA</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-muted/20">
                    <TableHead className="w-[50%] text-center font-bold text-foreground">DÍAS</TableHead>
                    <TableHead className="w-[50%] text-center font-bold text-foreground">HORARIO</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pickupTimes.map((row, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-muted/10" : ""}>
                      <TableCell className="text-center font-medium">{row.days}</TableCell>
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
              <span className="font-medium">Disponibilidad Especial</span>
            </div>
            <p className="body-base max-w-xl">
              Para situaciones especiales o servicios fuera del horario establecido, consulte con nuestro equipo para coordinar una atención personalizada.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Schedules;
