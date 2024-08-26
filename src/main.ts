import {AdvertisingService} from "./advertising/advertising.service";
import {AwsS3} from "./bucket/aws-s3";

function main() {
    const awsS3 = new AwsS3();
    const advertisingService = new AdvertisingService(awsS3);
    advertisingService.transFromFileToLocationNode();

    // добавляем рекламодателя в локацию
    // advertisingService.addAdvertiser();

    // получаем список рекламодателей для указанной локации
    // const advertisersInMsk = advertisingService.getAdvertisersForLocation();
    // это будет в нибудь другом сервисе котоырй будет взаимодействаоть с публичными методами
    // не успел саму реализацию но постарался описать контракты классов и идею
}

try {
    main();
} catch (error) {
    // ошибки
} finally {
    // grateful shutdown
}