---
{
    "name": "EventGAN",
    "aliases": [],
    "year": 2019,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Human Pose Recognition"
    ],
    "description": "Object Detection and Classification",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1gDy2PwVOu_FPOsEZjojdWEB2ZHmpio8D",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 48.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventGAN: Leveraging Large Scale Image Datasets for Event Cameras",
        "doi": "10.1109/ICCP51581.2021.9466265",
        "authors": [
            "Alex Zihao Zhu",
            "Ziyun Wang",
            "Kaung Khant",
            "Kostas Daniilidis"
        ],
        "abstract": "Event cameras provide a number of benefits over traditional cameras, such as the ability to track incredibly fastmotions, high dynamic range, and low power consumption.However, their application into computer vision problems,many of which are primarily dominated by deep learningsolutions, has been limited by the lack of labeled trainingdata for events. In this work, we propose a method whichleverages the existing labeled data for images by simulatingevents from a pair of temporal image frames, using a convolutional neural network. We train this network on pairsof images and events, using an adversarial discriminatorloss and a pair of cycle consistency losses. The cycle consistency losses utilize a pair of pre-trained self-supervisednetworks which perform optical flow estimation and imagereconstruction from events, and constrain our network togenerate events which result in accurate outputs from bothof these networks. Trained fully end to end, our networklearns a generative model for events from images withoutthe need for accurate modeling of the motion in the scene,exhibited by modeling based methods, while also implicitly modeling event noise. Using this simulator, we train apair of downstream networks on object detection and 2Dhuman pose estimation from events, using simulated datafrom large scale image datasets, and demonstrate the networks\u2019 abilities to generalize to datasets with real events.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 24,
            "updated": "2025-07-14T09:35:39.248569"
        },
        {
            "source": "scholar",
            "count": 55,
            "updated": "2025-07-14T09:35:38.996619"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/1912.01584"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9466265"
        },
        {
            "type": "github_page",
            "url": "https://github.com/alexzzhu/EventGAN"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1--11",
        "year": 2021,
        "month": "may",
        "author": "Zhu, Alex Zihao and Wang, Ziyun and Khant, Kaung and Daniilidis, Kostas",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE} {International} {Conference} on {Computational} {Photography} ({ICCP})",
        "urldate": "2023-10-06",
        "language": "en",
        "doi": "10.1109/ICCP51581.2021.9466265",
        "url": "https://ieeexplore.ieee.org/document/9466265/",
        "shorttitle": "{EventGAN}",
        "isbn": "978-1-66541-952-9",
        "title": "{EventGAN}: {Leveraging} {Large} {Scale} {Image} {Datasets} for {Event} {Cameras}",
        "address": "Haifa, Israel",
        "type": "inproceedings",
        "key": "zhu_eventgan_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/IROS40897.2019.8968223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.248",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2017.8296630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SIMPAR.2016.7862386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2019.XV.045",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.471",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-009-0275-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00864",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "title": "Improved training of wasserstein gans",
            "source": "crossref"
        },
        {
            "title": "Hierarchical implicit models and likelihood-free variational inference",
            "source": "crossref"
        },
        {
            "title": "How to train a gan",
            "source": "crossref"
        },
        {
            "title": "Batch normalization: Accelerating deep network training by reducing internal covariate shift",
            "source": "crossref"
        },
        {
            "title": "Spectral normalization for generative adversarial networks",
            "source": "crossref"
        },
        {
            "title": "Large scale GAN training for high fidelity natural image synthesis",
            "source": "crossref"
        },
        {
            "title": "Improved techniques for training gans",
            "source": "crossref"
        },
        {
            "title": "Sim-to-real transfer of robotic control with dynamics randomization",
            "source": "crossref"
        },
        {
            "title": "Sim-to-real via sim-to-sim: Data-efficient robotic grasping via randomized-to-canonical adaptation networks",
            "source": "crossref"
        },
        {
            "title": "Generative adversarial nets",
            "source": "crossref"
        },
        {
            "title": "U-Net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Interiornet: Mega-scale multi-sensor photo-realistic indoor scenes dataset",
            "source": "crossref"
        },
        {
            "title": "Microsoft COCO: Common objects in context",
            "source": "crossref"
        },
        {
            "title": "Ddd17: End-to-end davis driving dataset",
            "source": "crossref"
        },
        {
            "title": "Image-to-image translation with conditional adversarial networks",
            "source": "crossref"
        },
        {
            "title": "GANs trained by a two time-scale update rule converge to a local nash equilibrium",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
