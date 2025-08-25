---
{
    "name": "Rock Scenes",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Optical Flow"
    ],
    "description": "Optical Flow",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Dataset provided on request from the corresponding author",
        "dataset_links": []
    },
    "paper": {
        "title": "HUGNet: Hemi-Spherical Update Graph Neural Network Applied to Low-Latency Event-Based Optical Flow",
        "doi": "10.1109/CVPRW59228.2023.00411",
        "authors": [
            "Thomas Dalgaty",
            "Thomas Mesquida",
            "Damien Joubert",
            "Amos Sironi",
            "Pascal Vivet",
            "Christoph Posch"
        ],
        "abstract": "Event camera pixels asynchronously output binary events corresponding to local light intensity changes in time. While encoding visual information in this fashion increases sparsity and the temporal detail of motion with respect to frame-based cameras, there is not yet an established machine learning method capable of exploiting these features to increase efficiency, reduce latency and, ultimately, perform optimally in event-based tasks. Graph neural networks are a promising avenue for such a method, but current solutions are too slow to be compatible with the continuous streaming nature of event-data. In this study, we propose a hemi-spherical update event-graph neural network that significantly reduces the complexity and latency of graph updating and event-level prediction. We compare our approach to existing graph neural network methods, as well as to dense-frame convolutional neural networks, on optical flow estimation tasks. Relative to the previous state of the art in event-graphs, we reduce event-graph update latency by more than four orders of magnitude and reduce the number of neural network calculations per second by 70\u00d7 while predicting optical flow more accurately.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 8,
            "updated": "2025-06-07T14:10:02.505032"
        },
        {
            "source": "scholar",
            "count": 17,
            "updated": "2025-06-07T14:10:01.659133"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10208748"
        }
    ],
    "full_name": "Rock Scenes (RS)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "3953--3962",
        "year": 2023,
        "month": "jun",
        "author": "Dalgaty, Thomas and Mesquida, Thomas and Joubert, Damien and Sironi, Amos and Vivet, Pascal and Posch, Christoph",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2024-12-07",
        "language": "en",
        "doi": "10.1109/CVPRW59228.2023.00411",
        "url": "https://ieeexplore.ieee.org/document/10208748/",
        "shorttitle": "{HUGNet}",
        "isbn": "9798350302493",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{HUGNet}: {Hemi}-{Spherical} {Update} {Graph} {Neural} {Network} applied to low-latency event-based optical flow",
        "address": "Vancouver, BC, Canada",
        "type": "inproceedings",
        "key": "Dalgaty2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00961",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2903179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00097",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00774",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3065386",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0893-6080(88)90024-X",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_22",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.58337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1409060.1409079",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco_a_01086",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01442",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC42615.2023.10067566",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i1.19931",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1748-0221/17/11/P11003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2010.5539939",
            "source": "crossref"
        },
        {
            "title": "Dropedge: Towards deep graph convolutional networks on node classification",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Real-time 3d reconstruction and 6-dof tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "A 1280&#x00D7;960 dynamic vision sensor with a 4.95-m pixel pitch and motion artifact minimization",
            "source": "crossref"
        },
        {
            "title": "Self-supervised learning of event-based optical flow with spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Secrets of event-based optical flow",
            "source": "crossref"
        },
        {
            "title": "Semi-supervised classification with graph convolutional networks",
            "source": "crossref"
        },
        {
            "title": "Decoupled weight decay regularization",
            "source": "crossref"
        },
        {
            "title": "Open3d: A modern library for 3d data processing",
            "source": "crossref"
        },
        {
            "title": "Instance normalization: The missing ingredient for fast stylization",
            "source": "crossref"
        },
        {
            "title": "Event-based asynchronous sparse convolutional networks",
            "source": "crossref"
        },
        {
            "title": "An image is worth 16x16 words: Transformers for image recognition at scale",
            "source": "crossref"
        },
        {
            "title": "Fast graph representation learning with pytorch geometric",
            "source": "crossref"
        },
        {
            "title": "A contrast sensitive silicon retina with reciprocal synapses",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

### Datasets Referenced in this Paper

\[[HMDB-DVS]\]
\[[MVSEC]\]
