import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Sun, TrendingDown, TrendingUp, Landmark } from 'lucide-react';

export const CurrencyWidget = () => {
    const rates = [
        { currency: 'USD', value: '912.45', change: '+0.02%', up: true },
        { currency: 'EUR', value: '984.12', change: '-0.05%', up: false },
    ];

    return (
        <Card className="border-primary/10 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <CardHeader className="bg-muted/50 py-3 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-primary" /> Câmbio BNA
                </CardTitle>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">Hoje</span>
            </CardHeader>
            <CardContent className="py-4 space-y-4">
                {rates.map((rate) => (
                    <div key={rate.currency} className="flex items-center justify-between group/item">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center font-bold text-xs text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                {rate.currency}
                            </div>
                            <span className="font-semibold text-sm">AKZ {rate.value}</span>
                        </div>
                        <div className={`flex items-center gap-1 text-[11px] font-bold ${rate.up ? 'text-green-600' : 'text-red-600'}`}>
                            {rate.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {rate.change}
                        </div>
                    </div>
                ))}
                <p className="text-[9px] text-muted-foreground text-center mt-2 italic">
                    * Valores indicativos do Banco Nacional de Angola
                </p>
            </CardContent>
        </Card>
    );
};

export const WeatherWidget = () => {
    return (
        <Card className="border-primary/10 shadow-sm overflow-hidden group hover:shadow-md transition-shadow bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-slate-950">
            <CardHeader className="bg-muted/30 py-3">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-500 animate-spin-slow" /> Luanda
                </CardTitle>
            </CardHeader>
            <CardContent className="py-4 flex items-center justify-between">
                <div className="space-y-1">
                    <div className="text-2xl font-black text-primary">31°C</div>
                    <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Céu Limpo</div>
                </div>
                <div className="relative">
                    <Sun className="w-12 h-12 text-orange-500 opacity-20 absolute -right-1 -top-1" />
                    <Cloud className="w-10 h-10 text-primary/40" />
                </div>
            </CardContent>
            <div className="bg-primary/5 px-4 py-2 border-t border-primary/5">
                <div className="flex justify-between text-[10px] font-medium">
                    <span className="text-muted-foreground">Humidade: 65%</span>
                    <span className="text-muted-foreground">Vento: 12km/h</span>
                </div>
            </div>
        </Card>
    );
};
