import { Injectable } from '@angular/core';
import { flattenDeep, sumBy, uniqBy } from 'lodash';

export class Temperature {
  day: string;
  temperature: number;
}

const temperaturesData : Temperature[] = [
  { temperature: 52, day: '1' },
  { temperature: 57, day: '2' },
  { temperature: 58, day: '3' },
  { temperature: 56, day: '4' },
  { temperature: 59, day: '5' },
  { temperature: 59, day: '6' },
  { temperature: 56, day: '7' },
  { temperature: 62, day: '8' },
  { temperature: 57, day: '9' },
  { temperature: 54, day: '10' },
  { temperature: 52, day: '11' },
  { temperature: 58, day: '12' },
  { temperature: 53, day: '13' },
  { temperature: 54, day: '14' },
  { temperature: 57, day: '15' },
  { temperature: 61, day: '16' },
  { temperature: 58, day: '17' },
  { temperature: 63, day: '18' },
  { temperature: 64, day: '19' },
  { temperature: 52, day: '20' },
];

export interface ProductSold {
  name: string;
  count: number;
}

export interface UnitSold {
  month: string;
  products: ProductSold[];
}

export interface Product {
  name: string;
  data: number[];
}

export interface IKeyValue {
  key: string;
  value: string;
}

export interface UnitSoldExtreme {
  month: string;
  product1: number;
  product2: number;
  product3: number;
}

export interface UnitSoldNgx {
  name: string;
  series: {
    name: string;
    value: string;
  }[];
}

const products: IKeyValue[] = [{
  key: 'product1',
  value: 'Product 1'
}, {
  key: 'product2',
  value: 'Product 2'
}, {
  key: 'product3',
  value: 'Product 3'
}];

const unitsSold: UnitSold[] = [{
  month: 'Jan',
  products: [{
    name: 'Product 1', count: 123,
  }, {
    name: 'Product 2', count: 165,
  }, {
    name: 'Product 3', count: 56,
  }]
}, {
  month: 'Feb',
  products: [{
    name: 'Product 1', count: 276,
  }, {
    name: 'Product 2', count: 210,
  }, {
    name: 'Product 3', count: 140,
  }]
}, {
  month: 'Mar',
  products: [{
    name: 'Product 1', count: 310,
  }, {
    name: 'Product 2', count: 287,
  }, {
    name: 'Product 3', count: 195,
  }]
}, {
  month: 'Apr',
  products: [{
    name: 'Product 1', count: 212,
  }, {
    name: 'Product 2', count: 144,
  }, {
    name: 'Product 3', count: 46,
  }]
}, {
  month: 'May',
  products: [{
    name: 'Product 1', count: 240,
  }, {
    name: 'Product 2', count: 190,
  }, {
    name: 'Product 3', count: 123,
  }]
}, {
  month: 'Jun',
  products: [{
    name: 'Product 1', count: 156,
  }, {
    name: 'Product 2', count: 167,
  }, {
    name: 'Product 3', count: 78,
  }]
}, {
  month: 'Jul',
  products: [{
    name: 'Product 1', count: 98,
  }, {
    name: 'Product 2', count: 212,
  }, {
    name: 'Product 3', count: 95,
  }]
}, {
  month: 'Aug',
  products: [{
    name: 'Product 1', count: 48,
  }, {
    name: 'Product 2', count: 112,
  }, {
    name: 'Product 3', count: 125,
  }],
}, {
  month: 'Sept',
  products: [{
    name: 'Product 1', count: 48,
  }, {
    name: 'Product 2', count: 112,
  }, {
    name: 'Product 3', count: 125,
  }],
}, {
  month: 'Nov',
  products: [{
    name: 'Product 1', count: 98,
  }, {
    name: 'Product 2', count: 12,
  }, {
    name: 'Product 3', count: 85,
  }],
}, {
  month: 'Dec',
  products: [{
    name: 'Product 1', count: 198,
  }, {
    name: 'Product 2', count: 85,
  }, {
    name: 'Product 3', count: 121,
  }],
}];

@Injectable()
export class Service {
  getTemperaturesData(): Temperature[] {
    return temperaturesData;
  }

  getRangeOfAverageTemperature() {
    return {
      highAverage: 60.8,
      lowAverage: 53,
    };
  }

  getUnitsMonths(): string[] {
    return unitsSold.map((x: any) => x.month);
  }

  getProductTypes(): IKeyValue[] {
    return products;
  }

  getUnitsSoldExtreme(): UnitSoldExtreme[] {
    return unitsSold.map((x: UnitSold) => {
      const product1 = x.products.find((y: any) => y.name === 'Product 1')?.count || 0;
      const product2 = x.products.find((y: any) => y.name === 'Product 2')?.count || 0;
      const product3 = x.products.find((y: any) => y.name === 'Product 3')?.count || 0;
      return {
        month: x.month,
        product1,
        product2,
        product3,
      };
    });
  }

  getUnitsSoldKendo(): Product[] {
    const productNames = uniqBy(flattenDeep(unitsSold.map((x: any) => x.products)), (x: any) => x.name).map((x: any) => x.name);
    return productNames.map((name: string) => {
       const data = unitsSold.map((x) => x.products).map((x) => x.find((y: any) => y.name === name)?.count || 0);
       return {
         name,
         data,
       };
    });
  }

  getUnitsSoldPieKendo(): any[] {
    const productNames = uniqBy(flattenDeep(unitsSold.map((x: any) => x.products)), (x: any) => x.name).map((x: any) => x.name);
    return productNames.map((name: string) => {
       const data = unitsSold.map((x) => x.products).map((x) => x.find((y: any) => y.name === name)?.count || 0);
       return {
         id: name,
         value: sumBy(data, (x: number) => x),
       };
    });
  }

  getUnitsSoldNgx(): UnitSoldNgx[] {
    const productNames = uniqBy(flattenDeep(unitsSold.map((x: any) => x.products)), (x: any) => x.name).map((x: any) => x.name);
    return productNames.map((name: string) => {
       const series = unitsSold.map((x) => {
         const value = x.products.find((y: any) => y.name === name)?.count || 0;
         return {
          name: x.month,
          value: value.toString(),
         }
       });
       return {
         name,
         series,
       };
    });
  }
}
