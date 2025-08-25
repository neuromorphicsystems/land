---
{
    "name": "N-ImageNet",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Samsung DVS"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Monitor Conversion",
        "Object Classification"
    ],
    "description": "Object Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "HuggingFace"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/82magnolia/N-ImageNet",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 440.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "N-ImageNet: Towards Robust, Fine-Grained Object Recognition with Event Cameras",
        "doi": "10.1109/ICCV48922.2021.00215",
        "authors": [
            "Junho Kim",
            "Jaehyeok Bae",
            "Gangin Park",
            "Dongsu Zhang",
            "Young Min Kim"
        ],
        "abstract": "We introduce N-ImageNet, a large-scale dataset targeted for robust, \ufb01ne-grained object recognition with event cameras. The dataset is collected using programmable hardware in which an event camera consistently moves around a monitor displaying images from ImageNet. N-ImageNet serves as a challenging benchmark for event-based object recognition, due to its large number of classes and samples. We empirically show that pretraining on N-ImageNet improves the performance of event-based classi\ufb01ers and helps them learn with few labeled data. In addition, we present several variants of N-ImageNet to test the robustness of event-based classi\ufb01ers under diverse camera trajectories and severe lighting conditions, and propose a novel event representation to alleviate the performance degradation. To the best of our knowledge, we are the \ufb01rst to quantitatively investigate the consequences caused by various environmental conditions on event-based object recognition algorithms. N-ImageNet and its variants are expected to guide practical implementations for deploying event-based object recognition algorithms in the real world.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 55,
            "updated": "2025-06-14T00:41:34.028509"
        },
        {
            "source": "scholar",
            "count": 110,
            "updated": "2025-06-14T00:41:33.868115"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2112.01041"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9710146"
        },
        {
            "type": "github_page",
            "url": "https://github.com/82magnolia/n_imagenet?tab=readme-ov-file#downloading-n-imagenet"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "connected_datasets": [
        "Mini N-ImageNet"
    ],
    "bibtex": {
        "pages": "2126--2136",
        "year": 2021,
        "month": "oct",
        "author": "Kim, Junho and Bae, Jaehyeok and Park, Gangin and Zhang, Dongsu and Kim, Young Min",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICCV48922.2021.00215",
        "url": "https://ieeexplore.ieee.org/document/9710146/",
        "shorttitle": "N-{ImageNet}",
        "isbn": "978-1-66542-812-5",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "N-{ImageNet}: {Towards} {Robust}, {Fine}-{Grained} {Object} {Recognition} with {Event} {Cameras}",
        "address": "Montreal, QC, Canada",
        "type": "inproceedings",
        "key": "kim_n-imagenet_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS.2013.6679698",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050403",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP40778.2020.9191148",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2017.2717848",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV.2018.00080",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2017.7870263",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP40776.2020.9053002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00834",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG47880.2020.00069",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2004.383",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app10062024",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1997.9.8.1735",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58517-4_6",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00210",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2785272",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00176",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2016.7532633",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.71",
            "source": "crossref"
        },
        {
            "title": "Learning to see in the dark with events",
            "source": "crossref"
        },
        {
            "title": "Phased lstm: Accelerating recurrent network training for long or eventbased sequences",
            "source": "crossref"
        },
        {
            "title": "Pred18: Dataset and further experiments with davis event camera in predator-prey robot chasing",
            "source": "crossref"
        },
        {
            "title": "Show, attend and tell: Neural image caption generation with visual attention",
            "source": "crossref"
        },
        {
            "title": "Microsoft coco: Common objects in context",
            "source": "crossref"
        },
        {
            "title": "Sparse convolutions on continuous domains for point cloud and event stream networks",
            "source": "crossref"
        },
        {
            "title": "Unsupervised feature learning for event data: Direct vs inverse problem formulation",
            "source": "crossref"
        },
        {
            "title": "O(n)-space spatiotemporal filter for reducing noise in neuromorphic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Hots: A hierarchy of event-based timesurfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "Imagenet classification with deep convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Training deep spiking neural networks using backpropagation",
            "source": "crossref"
        },
        {
            "title": "Mnist handwritten digit database",
            "source": "crossref"
        },
        {
            "title": "Event enhanced high-quality image recovery",
            "source": "crossref"
        },
        {
            "title": "An image is worth 16x16 words: Transformers for image recognition at scale",
            "source": "crossref"
        },
        {
            "title": "Temporal binary representation for eventbased action recognition",
            "source": "crossref"
        },
        {
            "title": "A differentiable recurrent surface for asynchronous event-based data",
            "source": "crossref"
        },
        {
            "title": "A large scale event-based detection dataset for automotive",
            "source": "crossref"
        },
        {
            "title": "V2e: From video frames to realistic dvs event camera streams",
            "source": "crossref"
        },
        {
            "title": "Convolutional spiking neural networks for spatio-temporal feature extraction",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
