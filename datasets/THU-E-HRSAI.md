---
{
    "name": "THU-E-HRSAI",
    "aliases": [
        "THU-ERGB-SAI"
    ],
    "year": 2025,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [
        "Kinect RGB-D camera",
        "Thorlabs CCM1BS013"
    ],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "Beamsplitters",
        "Synthetic Aperture Imaging"
    ],
    "description": "Synthetic Aperture Imaging",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Other"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Other",
                "url": "https://cloud.tsinghua.edu.cn/d/a7c74df9c1814779b705/",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 35.8,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "High-resolution synthetic aperture imaging method and benchmark based on event-frame fusion",
        "doi": "10.1016/j.inffus.2025.103211",
        "authors": [
            "Siqi Li",
            "Yipeng Li",
            "Yu-Shen Liu",
            "Shaoyi Du",
            "Jun-Hai Yong",
            "Yue Gao"
        ],
        "abstract": "Existing event-based synthetic aperture imaging (SAI) methods can reconstruct unobstructed images of the background target scene behind dense foreground occlusions from visual information captured by an event camera. However, limited by the spatial resolution of existing event cameras and the computational paradigm of existing event-based SAI methods, the resolution of images reconstructed by existing methods is insufficient. In this paper, we propose a high-resolution (HR) SAI method based on event-frame fusion. Our method trades the high temporal resolution of the event camera for spatial resolution and fuses events and frames to reconstruct the HR unobstructed image. Our proposed method leverages an event-guided occlusion segmentation mechanism to predict the occlusion masks, and extracts multi-view multi-modal valid visual features while invalid parts are discarded. Then, an adaptive fusion module is proposed to align and fuse the multi-view features, and the HR unobstructed scene image is reconstructed from the fused feature. In addition, we construct a multi-sensor vision acquisition system and collect the first Event-based High-Resolution Synthetic Aperture Imaging (THU) dataset containing low-resolution occluded frames, event streams, and HR ground truth unobstructed scene images, which will be released as the first benchmark. We conduct experiments on our THU dataset, and the experimental results demonstrate that our proposed method achieves state-of-the-art performance. Downstream application results further prove the necessity of our method. Code and dataset are available at: https://github.com/lisiqi19971013/E-HRSAI.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-15T11:00:19.810371"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.sciencedirect.com/science/article/pii/S1566253525002842"
        },
        {
            "type": "github_page",
            "url": "https://github.com/lisiqi19971013/E-HRSAI"
        }
    ],
    "full_name": "Event-based High-Resolution Synthetic Aperture Imaging",
    "additional_metadata": {
        "stereo": false
    },
    "connected_datasets": [
        "THU-HSEVI",
        "THU-ACT-50",
        "THUMV-EACT-50"
    ],
    "bibtex": {
        "year": 2025,
        "pages": "103211",
        "number": "",
        "volume": "",
        "journal": "Information Fusion",
        "author": "Li, Siqi and Li, Yipeng and Liu, Yu-Shen and Du, Shaoyi and Yong, Jun-Hai and Gao, Yue",
        "title": "High-Resolution Synthetic Aperture Imaging Method and Benchmark Based on EventFrame Fusion",
        "type": "article",
        "key": "hrsai"
    },
    "referenced_papers": [
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2011.10.003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2012.06.014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093448",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2903179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3227448",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01721",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11633-022-1350-3",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.inffus.2022.10.007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2439281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.182",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2968521",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-11021-5_5",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01234-2_18",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00352",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00210",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00986",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2941941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00491",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00247",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00342",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00484",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00768",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00564",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.1986.4767851",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00444",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00389",
            "source": "crossref"
        },
        {
            "title": "Dynamic obstacle avoidance for quadrotors with event cameras",
            "source": "crossref"
        },
        {
            "title": "A novel multi-object detection method in complex scene using synthetic aperture imaging",
            "source": "crossref"
        },
        {
            "title": "Synthetic aperture tracking: Tracking through occlusions",
            "source": "crossref"
        },
        {
            "title": "Event-based, 6-DOF camera tracking from photometric depth maps",
            "source": "crossref"
        },
        {
            "title": "Using plane + parallax for calibrating dense camera arrays",
            "source": "crossref"
        },
        {
            "title": "Reconstructing occluded surfaces using synthetic apertures: Stereo, focus and robust measures",
            "source": "crossref"
        },
        {
            "title": "Synthetic aperture imaging using pixel labeling via energy minimization",
            "source": "crossref"
        },
        {
            "title": "A 128\u00d7 128 120 db 15 \u03bcs latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        },
        {
            "title": "A 240\u00d7 180 130 dB 3 \u03bcs latency global shutter spatiotemporal vision sensor",
            "source": "crossref"
        },
        {
            "title": "HOTS: A hierarchy of event-based time-surfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "HFirst: A temporal approach to object recognition",
            "source": "crossref"
        },
        {
            "title": "Real-time high speed motion prediction using fast aperture-robust event-driven visual flow",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of a hierarchical spiking neural network for optical flow estimation: From events to global motion perception",
            "source": "crossref"
        },
        {
            "title": "Distance surface for event-based optical flow",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Learning to see through with events",
            "source": "crossref"
        },
        {
            "title": "Image de-occlusion via event-enhanced multi-modal fusion hybrid network",
            "source": "crossref"
        },
        {
            "title": "Image super-resolution: A comprehensive review, recent trends, challenges and applications",
            "source": "crossref"
        },
        {
            "title": "Image super-resolution using deep convolutional networks",
            "source": "crossref"
        },
        {
            "title": "Residual dense network for image restoration",
            "source": "crossref"
        },
        {
            "title": "Single image super-resolution via a holistic attention network",
            "source": "crossref"
        },
        {
            "title": "Video super-resolution with convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "MEMC-Net: Motion estimation and motion compensation driven neural network for video interpolation and enhancement",
            "source": "crossref"
        },
        {
            "title": "Real-time panoramic tracking for event cameras",
            "source": "crossref"
        },
        {
            "title": "CMax-SLAM: Event-based rotational-motion bundle adjustment and SLAM system using contrast maximization",
            "source": "crossref"
        },
        {
            "title": "Formulating event-based image reconstruction as a linear inverse problem with deep regularization using optical flow",
            "source": "crossref"
        },
        {
            "title": "A computational approach to edge detection",
            "source": "crossref"
        },
        {
            "title": "Very deep convolutional networks for large-scale image recognition",
            "source": "crossref"
        },
        {
            "title": "ImageNet: A large-scale hierarchical image database",
            "source": "crossref"
        },
        {
            "title": "Decoupled weight decay regularization",
            "source": "crossref"
        },
        {
            "title": "Microsoft COCO: Common Objects in Context",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
