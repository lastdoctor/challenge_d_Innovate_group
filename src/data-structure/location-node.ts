// Использум деревья чтобы хранить локации (можно красное черное или авл дерево чтобы поиск был log N)
//              ru - если есть advertisers то на всех children будет пускать рекламу
//          /   |       \
//        srd  permobl   chelobl
//       / |
//     ekb  revda - advertisers = set пустой значит без рекламы

export class LocationNode {
    name: string; // название объекта
    advertisers: Set<string>; // на чем будет реклама
    children: Map<string, LocationNode>; // локации объектов

    constructor(name: string) {
        this.name = name;
        this.advertisers = new Set();
        this.children = new Map();
    }

    addAdvertiser(advertiser: string): void {
        this.advertisers.add(advertiser);
    }

    getOrCreateChild(name: string): LocationNode {
        if (!this.children.has(name)) {
            this.children.set(name, new LocationNode(name));
        }
        return this.children.get(name)!;
    }

    getChild(name: string): LocationNode | undefined {
        return this.children.get(name);
    }
}