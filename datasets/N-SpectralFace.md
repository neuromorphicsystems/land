---
{
    "name": "N-SpectralFace",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Face Detection",
        "Infrared (IR)",
        "Beamsplitters"
    ],
    "description": "Multi-spectral event-based vision dataset for face detection",
    "connected_datasets": [
        "N-MobiFace",
        "Real-SpectralFace",
        "N-YoutubeFaces"
    ],
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://ms-evs.aisoft.org/N-SpectralFace/full/",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 83.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "MS-EVS: Multispectral event-based vision for deep learning based face detection",
        "doi": "10.1109/WACV57701.2024.00067",
        "authors": [
            "Saad Himmi",
            "Vincent Parret",
            "Ajad Chhatkuli",
            "Luc Van Gool"
        ],
        "abstract": "Event-based sensing is a relatively new imaging modality that enables low latency, low power, high temporal resolution and high dynamic range acquisition. These properties make it a highly desirable sensor for edge applications and in high dynamic range environments. As of today, most event-based sensors are monochromatic (grayscale), capturing light from a wide spectral range over the visible, in a single channel. In this paper, we introduce multispectral events and study their advantages. In particular, we consider multiple bands in the visible and near-infrared range, and explore their potential compared to monochromatic events and conventional multispectral imaging for the face detection task. We further release the first large scale bimodal face detection datasets, with RGB videos and their simulated color events, N-MobiFace and N-YoutubeFaces, and a smaller dataset with multispectral videos and events, N-SpectralFace. We find that early fusion of multispectral events significantly improves the face detection performance, compared to the early fusion of conventional multi-spectral images. This result shows that multispectral events carry relatively more useful information about the scene than conventional multispectral images do, with respect to their grayscale equivalent. To the best of our knowledge, our proposed method is the first exploratory research on multispectral events, specifically including near infrared data.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 3,
            "updated": "2025-09-01T05:30:00.484355"
        },
        {
            "source": "scholar",
            "count": 8,
            "updated": "2025-09-01T05:30:02.036553"
        }
    ],
    "links": [
        {
            "type": "github_page",
            "url": "https://github.com/ms-evs/ms-evs.github.io"
        },
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/WACV2024/html/Himmi_MS-EVS_Multispectral_Event-Based_Vision_for_Deep_Learning_Based_Face_Detection_WACV_2024_paper.html"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10483790"
        }
    ],
    "full_name": "",
    "referenced_papers": [
        {
            "doi": "10.1109/MGRS.2019.2912563",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2597194",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00107",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSTARS.2014.2329330",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2184485",
            "source": "crossref"
        },
        {
            "doi": "10.5220/0007257000002108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20870-7_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00412",
            "source": "crossref"
        },
        {
            "doi": "10.1017/S0952523808080796",
            "source": "crossref"
        },
        {
            "doi": "10.1167/17.3.14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594119",
            "source": "crossref"
        },
        {
            "doi": "10.1002/widm.1426",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.40",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2896128",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00587",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3162962",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2019.2907932",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2007.1014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG.2019.8756581",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46448-0_2",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.54.010559",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050412",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2020.3038317",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tpami.2016.2577031",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.03.019",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2006.883843",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-0-387-71041-9_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA46639.2022.9812059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2001.990517",
            "source": "crossref"
        },
        {
            "doi": "10.3390/electronics10080888",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2011.5995566",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CISE.2009.5366152",
            "source": "crossref"
        },
        {
            "doi": "10.1109/lsp.2016.2603342",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2011.2171949",
            "source": "crossref"
        },
        {
            "title": "Basler dart \u2013 area scan cameras",
            "source": "crossref"
        },
        {
            "title": "The reflectance spectrum of human skin",
            "source": "crossref"
        },
        {
            "title": "Event-based convolutional networks for object detection in neuromorphic cameras",
            "source": "crossref"
        },
        {
            "title": "Toward face detection, pose estimation and human recognition from hyperspectral imagery",
            "source": "crossref"
        },
        {
            "title": "Retinaface: Single-stage dense face localisation in the wild",
            "source": "crossref"
        },
        {
            "title": "ultralytics/yolov5: v6.0 - YOLOv5n \u2019Nano\u2019 models, Roboflow integration, TensorFlow export, OpenCV DNN support",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Video to events: Bringing modern computer vision closer to event cameras",
            "source": "crossref"
        },
        {
            "title": "V2E: from video frames to realistic DVS event camera streams",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "You only look once: Unified, real-time object detection",
            "source": "crossref"
        },
        {
            "title": "Assessing the importance of colours for cnns in object recognition",
            "source": "crossref"
        },
        {
            "title": "Cms series: Multispectral cameras",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "605\u2013614",
        "month": "jan",
        "year": 2024,
        "author": "Himmi, Saad and Parret, Vincent and Chhatkuli, Ajad and Gool, Luc Van",
        "publisher": "IEEE",
        "booktitle": "2024 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
        "doi": "10.1109/wacv57701.2024.00067",
        "url": "http://dx.doi.org/10.1109/WACV57701.2024.00067",
        "title": "MS-EVS: Multispectral event-based vision for deep learning based face detection",
        "type": "inproceedings",
        "key": "Himmi_2024"
    },
    "additional_metadata": {
        "num_recordings": 69,
        "spectral_bands": 10,
        "stereo": false
    }    
}
---

## Dataset Description

The dataset N-SpectralFace consists of 69 sequences captured around the office in different places, with different faces and lighting conditions. Each sequence is recorded simultaneously with two cameras part of a setup including a beamsplitter: a SILIOS CMS-C multispectral camera and a Basler dart grayscale camera with a long-pass IR filter in front. In total, 10 multispectral bands are captured in parallel: 8 narrow bands in the visible, 1 grayscale band over all the visible spectrum (from 430nm to 700nm) and 1 near-infrared band (from 850nm up to around 1000nm). The data from both cameras are synced temporally and spatially through calibration so that the bands can be combined.

The full dataset is available at https://ms-evs.aisoft.org/N-SpectralFace/full/. It contains RGB, Multispectral, and Grayscale data.

Some files (8.5G) were removed from N-SpectralFace but can be downloaded here (https://ms-evs.aisoft.org/N-SpectralFace/extra/) : it is either captured under regular office light (LED) so it does not have infrared illumination (not used for our experiments) AND/OR it contains obvious labelling/calibration/syncing issues.

-- Adapted from the Github project page.