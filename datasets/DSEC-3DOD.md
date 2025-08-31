---
{
    "name": "DSEC-3DOD",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Robotic and Moving Vehicle Datasets",
    "tags": [
        "Autonomous Driving",
        "Stereo",
        "Annotated Datasets"
    ],
    "description": "Annotated version of the DSEC Dataset",
    "connected_datasets": [
        "DSEC"
    ],
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "HuggingFace",
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/mickeykang/DSEC-3DOD/tree/main",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1A6XhFxDlqcIgTi28G01fhXBQceaK5vjV",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 40.2,
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

# Dataset Description

Annotation experts were used to label 3D bounding boxes at 10 FPS, ensuring alignment with the sensor data.