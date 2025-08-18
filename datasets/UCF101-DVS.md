---
{
    "name": "UCF101-DVS",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition",
        "Monitor Conversion"
    ],
    "task": "Human Activity Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "Converted dataset (by recording images on a monitor)",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1icJFUNJZEofOke-9bizfD-m4643G1ycg/view?usp=drive_link",
                "format": "Matlab",
                "available": true,
                "doi": "10.57702/tftp16l0"
            }
        ],
        "size_gb": 28.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Graph-Based Object Classification for Neuromorphic Vision Sensing",
        "doi": "10.1109/ICCV.2019.00058",
        "authors": [
            "Yin Bi",
            "Aaron Chadha",
            "Alhabib Abbas",
            "Eirina Bourtsoulatze",
            "Yiannis Andreopoulos"
        ],
        "abstract": "Neuromorphic vision sensing (NVS) devices represent visual information as sequences of asynchronous discrete events (a.k.a., \u201cspikes\u201d) in response to changes in scene re\ufb02ectance. Unlike conventional active pixel sensing (APS), NVS allows for signi\ufb01cantly higher event sampling rates at substantially increased energy ef\ufb01ciency and robustness to illumination changes. However, object classi\ufb01cation with NVS streams cannot leverage on state-of-the-art convolutional neural networks (CNNs), since NVS does not produce frame representations. To circumvent this mismatch between sensing and processing with CNNs, we propose a compact graph representation for NVS. We couple this with novel residual graph CNN architectures and show that, when trained on spatio-temporal NVS data for object classi\ufb01cation, such residual graph CNNs preserve the spatial and temporal coherence of spike events, while requiring less computation and memory. Finally, to address the absence of large real-world NVS datasets for complex recognition tasks, we present and make available a 100k dataset of NVS recordings of the American sign language letters, acquired with an iniLabs DAVIS240c device under real-world conditions.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 112,
            "updated": "2025-06-14T09:38:40.967945"
        },
        {
            "source": "scholar",
            "count": 214,
            "updated": "2025-06-14T09:38:40.596674"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1910.03579"
        },
        {
            "type": "paper",
            "url": "https://discovery.ucl.ac.uk/id/eprint/10109453/1/Yin%20Bi%20-%20Thesis.pdf"
        },
        {
            "type": "github_page",
            "url": "https://github.com/PIX2NVS/NVS2Graph"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "UCF101",
        "num_recordings": "13300",
        "num_classes": "101"
    },
    "connected_datasets": [
        "ASL-DVS",
        "HMDB51-DVS",
        "ASLAN-DVS"
    ],
    "bibtex": {
        "pages": "491--501",
        "year": 2019,
        "month": "oct",
        "author": "Bi, Yin and Chadha, Aaron and Abbas, Alhabib and Bourtsoulatze, Eirina and Andreopoulos, Yiannis",
        "publisher": "IEEE",
        "booktitle": "2019 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICCV.2019.00058",
        "url": "https://ieeexplore.ieee.org/document/9010397/",
        "isbn": "978-1-72814-803-8",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Graph-{Based} {Object} {Classification} for {Neuromorphic} {Vision} {Sensing}",
        "address": "Seoul, Korea (South)",
        "type": "inproceedings",
        "key": "bi_graph-based_2019"
    },
    "referenced_papers": [
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.576",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSP.2018.2879624",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s001700170075",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2015.112",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00374",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.234",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCAD.2015.2474396",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2015.7280696",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00097",
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
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v31i1.11231",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2015.7280625",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.11",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSP.2013.2238935",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00137",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2015.02.013",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00594",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fncom.2015.00099",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-19258-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2347207",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2017.8296630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2012.02.022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.71",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2017.2693418",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346763",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2016.2536741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00272",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00178",
            "source": "crossref"
        },
        {
            "title": "Pruning convolutional neural networks for resource efficient inference",
            "source": "crossref"
        },
        {
            "title": "Deeper insights into graph convolutional networks for semi-supervised learning",
            "source": "crossref"
        },
        {
            "title": "Local spectral graph convolution for point set feature learning",
            "source": "crossref"
        },
        {
            "title": "How powerful are graph neural networks?",
            "source": "crossref"
        },
        {
            "title": "Imagenet classification with deep convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Semi-supervised classification with graph convolutional networks",
            "source": "crossref"
        },
        {
            "title": "Diffusion-convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Convolutional networks on graphs for learning molecular fingerprints",
            "source": "crossref"
        },
        {
            "title": "pydvs: An extensible, real-time dynamic vision sensor emulator using off-the-shelf hardware",
            "source": "crossref"
        },
        {
            "title": "Batch normalization: Accelerating deep network training by reducing internal covariate shift",
            "source": "crossref"
        },
        {
            "title": "Inception-v4, inception-resnet and the impact of residual connections on learning",
            "source": "crossref"
        },
        {
            "title": "Very deep convolutional networks for large-scale image recognition",
            "source": "crossref"
        },
        {
            "title": "The emerging field of signal processing on graphs: Extending high-dimensional data analysis to networks and other irregular domains",
            "source": "crossref"
        },
        {
            "title": "On event-based optical flow detection",
            "source": "crossref"
        },
        {
            "title": "Spectral networks and locally connected networks on graphs",
            "source": "crossref"
        },
        {
            "title": "Attention mechanisms for object recognition with event-based cameras",
            "source": "crossref"
        },
        {
            "title": "Event-based convolutional networks for object detection in neuromorphic cameras",
            "source": "crossref"
        },
        {
            "title": "Convolutional neural networks on graphs with fast localized spectral filtering",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic vision sensing and processing",
            "source": "crossref"
        },
        {
            "title": "Learning shape correspondence with anisotropic convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic engineering",
            "source": "crossref"
        },
        {
            "title": "Phased lstm: Accelerating recurrent network training for long or event-based sequences",
            "source": "crossref"
        }
    ]
}
---




## Dataset Structure

Converted from the UCF101 dataset and contains 13300 recordings in 101 categories.