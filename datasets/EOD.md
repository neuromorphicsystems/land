---
{
    "name": "EOD",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Object Detection",
        "Drone Detection"
    ],
    "description": "Target Detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "MVT: Multi-Vision Transformer for Event-Based Small Target Detection",
        "doi": "10.3390/rs16091641",
        "authors": [
            "Shilong Jing",
            "Hengyi Lv",
            "Yuchen Zhao",
            "Hailong Liu",
            "Ming Sun"
        ],
        "abstract": "Object detection in remote sensing plays a crucial role in various ground identification tasks. However, due to the limited feature information contained within small targets, which are more susceptible to being buried by complex backgrounds, especially in extreme environments (e.g., low-light, motion-blur scenes). Meanwhile, event cameras offer a unique paradigm with high temporal resolution and wide dynamic range for object detection. These advantages enable event cameras without being limited by the intensity of light, to perform better in challenging conditions compared to traditional cameras. In this work, we introduce the Multi-Vision Transformer (MVT), which comprises three efficiently designed components: the downsampling module, the Channel Spatial Attention (CSA) module, and the Global Spatial Attention (GSA) module. This architecture simultaneously considers short-term and long-term dependencies in semantic information, resulting in improved performance for small object detection. Additionally, we propose Cross Deformable Attention (CDA), which progressively fuses high-level and low-level features instead of considering all scales at each layer, thereby reducing the computational complexity of multi-scale features. Nevertheless, due to the scarcity of event camera remote sensing datasets, we provide the Event Object Detection (EOD) dataset, which is the first dataset that includes various extreme scenarios specifically introduced for remote sensing using event cameras. Moreover, we conducted experiments on the EOD dataset and two typical unmanned aerial vehicle remote sensing datasets (VisDrone2019 and UAVDT Dataset). The comprehensive results demonstrate that the proposed MVT-Net achieves a promising and competitive performance.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 3,
            "updated": "2025-07-03T09:16:45.029179"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-07-03T09:16:44.615168"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.mdpi.com/2072-4292/16/9/1641"
        }
    ],
    "full_name": "Event Object Detection (EOD)",
    "additional_metadata": {
        "num_recordings": "317",
        "num_classes": "6",
        "stereo": false
    },
    "bibtex": {
        "pages": "1641",
        "year": 2024,
        "month": "may",
        "author": "Jing, Shilong and Lv, Hengyi and Zhao, Yuchen and Liu, Hailong and Sun, Ming",
        "journal": "Remote Sensing",
        "urldate": "2024-12-15",
        "number": "9",
        "language": "en",
        "doi": "10.3390/rs16091641",
        "url": "https://www.mdpi.com/2072-4292/16/9/1641",
        "shorttitle": "{MVT}",
        "issn": "2072-4292",
        "copyright": "https://creativecommons.org/licenses/by/4.0/",
        "volume": "16",
        "title": "{MVT}: {Multi}-{Vision} {Transformer} for {Event}-{Based} {Small} {Target} {Detection}",
        "type": "article",
        "key": "jing_mvt_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01249-6_23",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00584",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46484-8_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.106",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2023.3297408",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.isprsjprs.2020.07.005",
            "source": "crossref"
        },
        {
            "doi": "10.1080/17538947.2023.2210312",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.isprsjprs.2023.03.017",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01030",
            "source": "crossref"
        },
        {
            "doi": "10.3390/rs15071838",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.sigpro.2023.108962",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00745",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01234-2_1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00986",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00091",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.81",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.169",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793924",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00603",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.isprsjprs.2022.06.002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00721",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW50498.2020.00103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01422",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.324",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2020.06.011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00841",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2023.3298852",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3045636",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2022.3229638",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v38i1.27795",
            "source": "crossref"
        },
        {
            "title": "A 240\u00d7 180 130 db 3 \u03bcs latency global shutter spatiotemporal vision sensor",
            "source": "crossref"
        },
        {
            "title": "Centralized feature pyramid for object detection",
            "source": "crossref"
        },
        {
            "title": "Fully convolutional networks for land cover classification from historical panchromatic aerial photographs",
            "source": "crossref"
        },
        {
            "title": "Strategies in training deep learning models to extract building from multisource images with small training sample sizes",
            "source": "crossref"
        },
        {
            "title": "Deforestation detection using a spatio-temporal deep learning approach with synthetic aperture radar and multispectral images",
            "source": "crossref"
        },
        {
            "title": "Feature-selection high-resolution network with hypersphere embedding for semantic segmentation of VHR remote sensing images",
            "source": "crossref"
        },
        {
            "title": "YOLOSR-IST: A deep learning method for small target detection in infrared remote sensing images based on super-resolution and YOLO",
            "source": "crossref"
        },
        {
            "title": "Attention is all you need",
            "source": "crossref"
        },
        {
            "title": "Dim2Clear network for infrared small target detection",
            "source": "crossref"
        },
        {
            "title": "Detecting tiny objects in aerial images: A normalized Wasserstein distance and a new benchmark",
            "source": "crossref"
        },
        {
            "title": "Novel up-scale feature aggregation for object detection in aerial images",
            "source": "crossref"
        },
        {
            "title": "Scale decoupled pyramid for object detection in aerial images",
            "source": "crossref"
        },
        {
            "title": "A global-local self-adaptive network for drone-view object detection",
            "source": "crossref"
        },
        {
            "title": "Zoom-and-reasoning: Joint foreground zoom and visual-semantic reasoning detection network for aerial images",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

The EOD dataset consists of 5317 event streams captured in various scenes, where each event stream is a collection of events within 33 ms. The dataset includes 3722 event streams for training, 530 event streams for validation, and 1065 event streams for testing, and contains six categories: car, bus, pedestrian, two-wheel, boat, and ship.

### Dataset Structure

- Contains 317 recordings in 6 categories
