---
{
    "name": "N-ROD",
    "aliases": [
        "RealNROD",
        "SynNROD"
    ],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3",
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "Monitor Conversion"
    ],
    "task": "Synthetic to Real Validation Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": true,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "http://tiny.cc/NRODDatasetDownload",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 402.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "N-ROD: a Neuromorphic Dataset for Synthetic-to-Real Domain Adaptation",
        "doi": "10.1109/CVPRW53098.2021.00148",
        "authors": [
            "Marco Cannici",
            "Chiara Plizzari",
            "Mirco Planamente",
            "Marco Ciccone",
            "Andrea Bottino",
            "Barbara Caputo",
            "Matteo Matteucci"
        ],
        "abstract": "Event cameras are novel neuromorphic sensors, which asynchronously capture pixel-level intensity changes in the form of \u201cevents\u201d. Event simulation from existing RGB datasets is commonly used to overcome the need of large amount of annotated data, which lacks due to the novelty of the event sensors. In this context, the possibility of using event simulation in synthetic scenarios, where data generation is not limited to pre-existing datasets, is to date still unexplored. In this work, we analyze the synth-to-real domain shift in event data, i.e., the gap arising between simulated events obtained from synthetic renderings and those captured with a real camera on real images. To this purpose, we extend to the event modality the popular RGB-D Object Dataset (ROD), which already comes with its synthetic version (SynROD). The resulting Neuromorphic ROD dataset (N-ROD) is the \ufb01rst to enable a synth-to-real analysis on event data, showing the effectiveness of Domain Adaptation techniques in reducing the synth-to-real shift. Moreover, through extensive experiments on multi-modal RGBE data, we show that events can be effectively combined with conventional visual information, encouraging further research in this area. The N-ROD dataset is available at https://N-ROD-dataset.github.io/home/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 5,
            "updated": "2025-06-10T10:36:28.162736"
        },
        {
            "source": "scholar",
            "count": 13,
            "updated": "2025-06-10T10:36:22.632236"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2021W/EventVision/papers/Cannici_N-ROD_A_Neuromorphic_Dataset_for_Synthetic-to-Real_Domain_Adaptation_CVPRW_2021_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9523162"
        },
        {
            "type": "project_page",
            "url": "https://n-rod-dataset.github.io/home/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/N-ROD-dataset/home"
        }
    ],
    "full_name": "Neuromorphic RGB-D Object Dataset (N-ROD)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1342--1347",
        "year": 2021,
        "month": "jun",
        "author": "Cannici, Marco and Plizzari, Chiara and Planamente, Mirco and Ciccone, Marco and Bottino, Andrea and Caputo, Barbara and Matteucci, Matteo",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPRW53098.2021.00148",
        "url": "https://ieeexplore.ieee.org/document/9523162/",
        "shorttitle": "N-{ROD}",
        "isbn": "978-1-66544-899-4",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "N-{ROD}: a {Neuromorphic} {Dataset} for {Synthetic}-to-{Real} {Domain} {Adaptation}",
        "address": "Nashville, TN, USA",
        "type": "inproceedings",
        "key": "Cannici2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV.2019.00746",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i04.6054",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2949697",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2011.5980382",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.sigpro.2016.07.018",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3007092",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.18",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00395",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00233",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.01004",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-68560-1_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00673",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3093870",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00392",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00845",
            "source": "crossref"
        },
        {
            "title": "Unsupervised domain adaptation learning algorithm for rgb-d staircase recognition",
            "source": "crossref"
        },
        {
            "title": "Unsupervised domain adaptation by backpropagation",
            "source": "crossref"
        },
        {
            "title": "Imagenet-trained cnns are biased towards texture; increasing shape bias improves accuracy and robustness",
            "source": "crossref"
        },
        {
            "title": "Semi-supervised learning by entropy minimization",
            "source": "crossref"
        },
        {
            "title": "Domain separation networks",
            "source": "crossref"
        },
        {
            "title": "Christoffer B&#x00F8;gelund Rasmussen, and Thomas B Moeslund. Depth value pre-processing for accurate transfer learning based rgb-d object recognition",
            "source": "crossref"
        },
        {
            "title": "Learning transferable features with deep adaptation networks",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Da4event: towards bridging the sim-to-real gap for event cameras using domain adaptation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

This folder contains N-ROD: a Neuromorphic Dataset for Synthetic-to-Real Domain Adaptation.
The folder is structured as it follows:

- RealNROD: an event-based conversion of the RGB-D Object Dataset (ROD) [1] obtained by moving an event-based camera (Prophesee’s HVGA Gen3) in front of an LCD monitor displaying ROD's samples

  - events: event recordings encoded in Prophesee's DAT format (http://docs.prophesee.ai/stable/data_formats/file_formats/dat.html).
  - voxelgrids: pre-processed 9-bins voxel grid representations

- SynNROD: an event-based conversion of the SynROD [2] dataset obtained using ESIM [3], by simulating the real recording setup

  - frames: gray-scale frames of the saccadic motion performed by the virtual camera. Frames can be converted in event streams using the ESIM simulator
  - voxelgrids: pre-processed 9-bins voxel grid representations

Dataset sizes:

- EvCamera-RealNROD - 71 Gb
- Sim-SynNROD - 204 Gb
- Sim-RealNROD - 127 Gb
