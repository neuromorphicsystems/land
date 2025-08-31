---
{
    "name": "Ev-Waymo",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Autonomous Driving",
        "Stereo",
        "Annotated Datasets"
    ],
    "description": "Annotated version of the DSEC Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "HuggingFace"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "This repository is publicly accessible, but you have to accept the conditions to access its files and content.",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/mickeykang/Ev-Waymo/tree/main",
                "format": "Unknown",
                "available": true
            }
        ],
        "size_gb": 174.2,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Ev-3DOD: Pushing the Temporal Boundaries of 3D Object Detection with Event Cameras",
        "doi": "10.1109/CVPR52734.2025.02533",
        "authors": [
            "Hoonhee Cho",
            "Jae-Young Kang",
            "Youngho Kim",
            "Kuk-Jin Yoon"
        ],
        "abstract": "Detecting 3D objects in point clouds plays a crucial role in autonomous driving systems. Recently, advanced multimodal methods incorporating camera information have achieved notable performance. For a safe and effective autonomous driving system, algorithms that excel not only in accuracy but also in speed and low latency are essential. However, existing algorithms fail to meet these requirements due to the latency and bandwidth limitations of fixed frame rate sensors, e.g., LiDAR and camera. To address this limitation, we introduce asynchronous event cameras into 3D object detection for the first time. We leverage their high temporal resolution and low bandwidth to enable high-speed 3D object detection. Our method enables detection even during inter-frame intervals when synchronized data is unavailable, by retrieving previous 3D information through the event camera. Furthermore, we introduce the first event-based 3D object detection datasets, Ev-Waymo and DSEC-3DOD, both of which include ground truth 3D bounding boxes at 100 FPS, establishing the first benchmarks for event-based 3D detectors. The code and dataset are available at https://github.com/mickeykang16/Ev3DOD.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-08-30T14:06:28.541696"
        },
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-08-30T14:06:30.107133"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Cho_Ev-3DOD_Pushing_the_Temporal_Boundaries_of_3D_Object_Detection_with_CVPR_2025_paper.html"
        },
        {
            "type": "project_page",
            "url": "https://github.com/mickeykang16/Ev3DOD"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR52688.2022.00116",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.691",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20074-8_39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00987",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00535",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.02076",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00096",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20074-8_36",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i1.19923",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19824-3_28",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-72761-0_17",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i2.16207",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00827",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v38i2.27944",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-024-07409-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2024.3361671",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV51458.2022.00235",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00314",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.02190",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01189",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00823",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v33i01.33018409",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00828",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-72670-5_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594119",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i1.25185",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01729",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-72943-0_1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.02358",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01298",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3298925",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3162962",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00783",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01681",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.02004",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v38i4.28105",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00097",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01667",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25233",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00746",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01270-0_39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00752",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01414",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01579",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19812-0_31",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW50498.2020.00506",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48891.2023.10160968",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00310",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00272",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00315",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00329",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00313",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01303",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25298",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00555",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58568-6_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01515",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00700",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00937",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00845",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00274",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00086",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01054",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00178",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-73347-5_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01056",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00466",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25346",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01394",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr.2019.00864",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i3.25370",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01613",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00033",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20077-9_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC48978.2021.9564951",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s18103337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.02359",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00204",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01105",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01006",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19839-7_42",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19842-7_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01412",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00550",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.01372",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00943",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00840",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr52688.2022.00098",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00094",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00191",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00472",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01180",
            "source": "crossref"
        },
        {
            "title": "Pushing the limits of asynchronous graph-based object detection with event cameras",
            "source": "crossref"
        },
        {
            "title": "Diffusion-ss3d: Diffusion model for semi-supervised 3d object detection",
            "source": "crossref"
        },
        {
            "title": "Bevdet: High-performance multi-camera 3d object detection in bird-eye-view",
            "source": "crossref"
        },
        {
            "title": "What makes multi-modal learning better than single (provably)",
            "source": "crossref"
        },
        {
            "title": "Unifying voxel-based representation with transformer for 3d object detection",
            "source": "crossref"
        },
        {
            "title": "Bevfusion: A simple and robust lidar-camera fusion framework",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Pointnet: Deep learning on point sets for 3d classification and segmentation",
            "source": "crossref"
        },
        {
            "title": "Pointnet++: Deep hierarchical feature learning on point sets in a metric space",
            "source": "crossref"
        },
        {
            "title": "Detr3d: 3d object detection from multi-view images via 3d-to-2d queries",
            "source": "crossref"
        },
        {
            "title": "Deepinteraction: 3d object detection via modality interaction",
            "source": "crossref"
        },
        {
            "title": "Pseudo-lidar++: Accurate depth for 3d object detection in autonomous driving",
            "source": "crossref"
        },
        {
            "title": "Hednet: A hierarchical encoder-decoder network for 3d object detection in point clouds",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "27197–27210",
        "month": "jun",
        "year": 2025,
        "author": "Cho, Hoonhee and Kang, Jae-Young and Kim, Youngho and Yoon, Kuk-Jin",
        "publisher": "IEEE",
        "booktitle": "2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        "doi": "10.1109/cvpr52734.2025.02533",
        "url": "http://dx.doi.org/10.1109/CVPR52734.2025.02533",
        "title": "Ev-3DOD: Pushing the Temporal Boundaries of 3D Object Detection with Event Cameras",
        "type": "inproceedings",
        "key": "Cho_2025"
    }
}
---


# Ev-Waymo Dataset Files

| Filename                                                                                         | Size     |
|--------------------------------------------------------------------------------------------------|----------|
| segment-10275144660749673822_5755_561_5775_561_with_camera_labels.zip                            | 3.24 GB  |
| segment-10289507859301986274_4200_000_4220_000_with_camera_labels.zip                            | 2.43 GB  |
| segment-10444454289801298640_4360_000_4380_000_with_camera_labels.zip                            | 3.94 GB  |
| segment-10596949720463106554_1933_530_1953_530_with_camera_labels.zip                            | 3.41 GB  |
| segment-10964956617027590844_1584_680_1604_680_with_camera_labels.zip                            | 4.43 GB  |
| segment-11199484219241918646_2810_030_2830_030_with_camera_labels.zip                            | 2.87 GB  |
| segment-11379226583756500423_6230_810_6250_810_with_camera_labels.zip                            | 3.13 GB  |
| segment-11918003324473417938_1400_000_1420_000_with_camera_labels.zip                            | 989 MB   |
| segment-11928449532664718059_1200_000_1220_000_with_camera_labels.zip                            | 4.49 GB  |
| segment-12161824480686739258_1813_380_1833_380_with_camera_labels.zip                            | 1.69 GB  |
| segment-12251442326766052580_1840_000_1860_000_with_camera_labels.zip                            | 3.59 GB  |
| segment-1255991971750044803_1700_000_1720_000_with_camera_labels.zip                             | 1.03 GB  |
| segment-13182548552824592684_4160_250_4180_250_with_camera_labels.zip                            | 2.58 GB  |
| segment-13271285919570645382_5320_000_5340_000_with_camera_labels.zip                            | 1.24 GB  |
| segment-13506499849906169066_120_000_140_000_with_camera_labels.zip                              | 3.66 GB  |
| segment-13840133134545942567_1060_000_1080_000_with_camera_labels.zip                            | 2.26 GB  |
| segment-14004546003548947884_2331_861_2351_861_with_camera_labels.zip                            | 2.69 GB  |
| segment-14098605172844003779_5084_630_5104_630_with_camera_labels.zip                            | 1.40 GB  |
| segment-14193044537086402364_534_000_554_000_with_camera_labels.zip                              | 659 MB   |
| segment-1422926405879888210_51_310_71_310_with_camera_labels.zip                                 | 3.09 GB  |
| segment-14369250836076988112_7249_040_7269_040_with_camera_labels.zip                            | 2.51 GB  |
| segment-14830022845193837364_3488_060_3508_060_with_camera_labels.zip                            | 5.11 GB  |
| segment-15125792363972595336_4960_000_4980_000_with_camera_labels.zip                            | 1.48 GB  |
| segment-15448466074775525292_2920_000_2940_000_with_camera_labels.zip                            | 1.44 GB  |
| segment-15696964848687303249_4615_200_4635_200_with_camera_labels.zip                            | 1.74 GB  |
| segment-15717839202171538526_1124_920_1144_920_with_camera_labels.zip                            | 4.51 GB  |
| segment-15844593126368860820_3260_000_3280_000_with_camera_labels.zip                            | 1.29 GB  |
| segment-15882343134097151256_4820_000_4840_000_with_camera_labels.zip                            | 2.14 GB  |
| segment-15942468615931009553_1243_190_1263_190_with_camera_labels.zip                            | 2.96 GB  |
| segment-15948509588157321530_7187_290_7207_290_with_camera_labels.zip                            | 6.66 GB  |
| segment-16202688197024602345_3818_820_3838_820_with_camera_labels.zip                            | 2.40 GB  |
| segment-16213317953898915772_1597_170_1617_170_with_camera_labels.zip                            | 1.79 GB  |
| segment-16372013171456210875_5631_040_5651_040_with_camera_labels.zip                            | 3.91 GB  |
| segment-16485056021060230344_1576_741_1596_741_with_camera_labels.zip                            | 2.09 GB  |
| segment-16561295363965082313_3720_000_3740_000_with_camera_labels.zip                            | 1.87 GB  |
| segment-16801666784196221098_2480_000_2500_000_with_camera_labels.zip                            | 4.15 GB  |
| segment-16977844994272847523_2140_000_2160_000_with_camera_labels.zip                            | 1.19 GB  |
| segment-17152649515605309595_3440_000_3460_000_with_camera_labels.zip                            | 2.10 GB  |
| segment-17388121177218499911_2520_000_2540_000_with_camera_labels.zip                            | 2.81 GB  |
| segment-18446264979321894359_3700_000_3720_000_with_camera_labels.zip                            | 5.16 GB  |
| segment-2036908808378190283_4340_000_4360_000_with_camera_labels.zip                             | 975 MB   |
| segment-207754730878135627_1140_000_1160_000_with_camera_labels.zip                              | 1.29 GB  |
| segment-2570264768774616538_860_000_880_000_with_camera_labels.zip                               | 2.13 GB  |
| segment-2736377008667623133_2676_410_2696_410_with_camera_labels.zip                             | 4.49 GB  |
| segment-2752216004511723012_260_000_280_000_with_camera_labels.zip                               | 1.15 GB  |
| segment-2834723872140855871_1615_000_1635_000_with_camera_labels.zip                             | 1.61 GB  |
| segment-3002379261592154728_2256_691_2276_691_with_camera_labels.zip                             | 677 MB   |
| segment-3077229433993844199_1080_000_1100_000_with_camera_labels.zip                             | 3.43 GB  |
| segment-30779396576054160_1880_000_1900_000_with_camera_labels.zip                               | 1.73 GB  |
| segment-3126522626440597519_806_440_826_440_with_camera_labels.zip                               | 2.25 GB  |
| segment-4348478035380346090_1000_000_1020_000_with_camera_labels.zip                             | 2.60 GB  |
| segment-4575961016807404107_880_000_900_000_with_camera_labels.zip                               | 956 MB   |
| segment-4641822195449131669_380_000_400_000_with_camera_labels.zip                               | 2.10 GB  |
| segment-4854173791890687260_2880_000_2900_000_with_camera_labels.zip                             | 2.37 GB  |
| segment-4916527289027259239_5180_000_5200_000_with_camera_labels.zip                             | 736 MB   |
| segment-5100136784230856773_2517_300_2537_300_with_camera_labels.zip                             | 2.31 GB  |
| segment-5183174891274719570_3464_030_3484_030_with_camera_labels.zip                             | 2.19 GB  |
| segment-5451442719480728410_5660_000_5680_000_with_camera_labels.zip                             | 4.13 GB  |
| segment-550171902340535682_2640_000_2660_000_with_camera_labels.zip                              | 738 MB   |
| segment-5576800480528461086_1000_000_1020_000_with_camera_labels.zip                             | 3.57 GB  |
| segment-5835049423600303130_180_000_200_000_with_camera_labels.zip