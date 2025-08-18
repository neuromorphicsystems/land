---
{
    "name": "Event-Shapes",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "subcategory": [
        "None"
    ],
    "task": "Object Tracking",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "SharePoint"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Sharepoint link appears to be broken",
        "dataset_links": [
            {
                "name": "Other",
                "url": "https://cloud.jepedersen.dk/s/nXCTBLLS8ZgbQny?openfile=true",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 6.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Translation and Scale Invariance for Event-Based Object tracking",
        "doi": "10.1145/3584954.3584996",
        "authors": [
            "Jens Egholm Pedersen",
            "Raghav Singhal",
            "Jorg Conradt"
        ],
        "abstract": "Without temporal averaging, such as rate codes, it remains challenging to train spiking neural networks for temporal regression tasks. In this work, we present a novel method to accurately predict spatial coordinates from event data with a fully spiking convolutional neural network (SCNN) without temporal averaging. Our method performs on-par with artificial neural networks (ANN) of similar complexity. Additionally, we demonstrate faster convergence in half the time using translation- and scale-invariant receptive fields. To permit comparison with conventional frame-based ANNs, we base our results on a simulated event-based dataset with an unrealistic high density. Therefore, we hypothesize that our method significantly outperform ANNs in settings with lower event density, as seen in real-life event-based data. Our model is fully spiking and can be ported directly to neuromorphic hardware.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-14T14:38:31.148902"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-06-14T14:38:30.945909"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/10.1145/3584954.3584996"
        },
        {
            "type": "github_page",
            "url": "https://github.com/jegp/coordinate-regression?tab=readme-ov-file"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "79--85",
        "year": 2023,
        "month": "apr",
        "author": "Pedersen, Jens Egholm and Singhal, Raghav and Conradt, Jorg",
        "publisher": "ACM",
        "booktitle": "Neuro-{Inspired} {Computational} {Elements} {Conference}",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1145/3584954.3584996",
        "url": "https://dl.acm.org/doi/10.1145/3584954.3584996",
        "isbn": "978-1-4503-9947-0",
        "title": "Translation and {Scale} {Invariance} for {Event}-{Based} {Object} tracking",
        "address": "San Antonio TX USA",
        "type": "inproceedings",
        "key": "pedersen_translation_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/S0361-9230(99)00161-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2849882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00107",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ESSDERC.2016.7599576",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2017.00002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/PROC.1970.8066",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS.2014.6981783",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2020.3047071",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2004.1315150",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2308551",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10851-021-01057-9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DSPWS.2006.265448",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0893-6080(97)00011-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2012.2198930",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.91",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.94",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2009.2023653",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fncir.2021.610446",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neuron.2021.01.009",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco_a_01086",
            "source": "crossref"
        },
        {
            "title": "Feature Detection with Automatic Scale Selection",
            "source": "crossref"
        },
        {
            "title": "Retinomorphic Event-Based Vision Sensors",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure