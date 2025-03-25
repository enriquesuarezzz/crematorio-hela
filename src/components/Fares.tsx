
import { FadeIn } from './FadeIn';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Fares = () => {
  const individualPrices = [
    { weight: 'INFERIOR A 1KG HASTA 2KG', price: '106.00 €' },
    { weight: 'MÁS DE 2KG HASTA 20KG', price: '150.00 €' },
    { weight: 'MÁS DE 20KG HASTA 45KG', price: '240.00 €' },
    { weight: 'MÁS DE 45KG HASTA 65KG', price: '340.00 €' },
    { weight: 'MÁS DE 65KG', price: '400.00 €' },
  ];

  const collectivePrices = [
    { weight: 'INFERIOR A 1KG HASTA 2KG', price: '57.00 €' },
    { weight: 'MÁS DE 2KG HASTA 20KG', price: '76.00 €' },
    { weight: 'MÁS DE 20KG HASTA 45KG', price: '109.00 €' },
    { weight: 'MÁS DE 45KG HASTA 65KG', price: '208.00 €' },
    { weight: 'MÁS DE 65KG', price: '252.00 €' },
  ];

  return (
    <section id="fares" className="py-20 bg-secondary/50">
      <div className="container-xl">
        <FadeIn direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Nuestras Tarifas</h2>
            <p className="body-base max-w-3xl mx-auto">Las tarifas de nuestros servicios de cremación son:</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <FadeIn direction="up" delay={200}>
            <Card className="shadow-soft overflow-hidden border-t-4 border-t-orange-500">
              <CardHeader className="bg-orange-500 text-white text-center py-3">
                <CardTitle>CREMACIÓN INDIVIDUAL</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/20">
                      <TableHead className="w-[60%] text-center font-bold text-foreground">PESO DE LA MASCOTA</TableHead>
                      <TableHead className="w-[40%] text-center font-bold text-foreground">PRECIO TOTAL</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {individualPrices.map((row, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-muted/10" : ""}>
                        <TableCell className="text-center font-medium">{row.weight}</TableCell>
                        <TableCell className="text-center">{row.price}</TableCell>
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
                <CardTitle>CREMACIÓN COLECTIVA</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/20">
                      <TableHead className="w-[60%] text-center font-bold text-foreground">PESO DE LA MASCOTA</TableHead>
                      <TableHead className="w-[40%] text-center font-bold text-foreground">PRECIO TOTAL</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {collectivePrices.map((row, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-muted/10" : ""}>
                        <TableCell className="text-center font-medium">{row.weight}</TableCell>
                        <TableCell className="text-center">{row.price}</TableCell>
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
            <p>Del mismo modo queremos informarles que aquellos servicios que se realizan a través de su veterinario pueden ver el coste incrementado debido a los gastos de gestión.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Fares;
