import {LocationNode} from "../data-structure/location-node";
import {AwsS3} from "../bucket/aws-s3";

export class AdvertisingService {
    private root: LocationNode;

    constructor(private readonly awsS3: AwsS3) {
        // DI для удобства тесты писать и interface прокидать и саму реализацию
    }

    // загружаем и преобразуем данные из файла в дерево локаций
    transFromFileToLocationNode(): void {
        // локика преоброзования
        // должен получится дерево вот в таком виде, где advertisers - пустой set
        //              ru
        //          /   |       \
        //        srd  permobl   chelobl
        //       / |
        //     ekb  revda
        // const rootNode = new LocationNode('ru');

        // затем цикло фо файлу и вызываем метод
        // this.addLocationToTree()
    }

    // метод для добавления рекламодателя в определенную локацию
    addAdvertiser(location: string, advertiser: string): void {
        // поиск по сбалансированному дереву logN
        // если нету локации кидаем business ошибку что локации нет
    }


    // Метод для получения рекламодателей для данной локации
    getAdvertisersForLocation(location: string): Set<string> {
        // поиск по сбалансированному дереву logN
        // нашли return currentNode.advertisers Set<string>
        return new Set<string>();
    }


    // метод для добавления локации в дерево
    private addLocationToTree(location: string): void {
    }
}
