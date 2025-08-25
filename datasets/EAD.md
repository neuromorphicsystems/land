---
{
    "name": "Event-based Autofocus Dataset (EAD)",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Autofocus"
    ],
    "description": "Automatic focusing methods",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Figshare"
        ],
        "file_formats": [
            "Matlab",
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Figshare",
                "url": "https://datahub.hku.hk/articles/dataset/EAF/19407884/1",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 5.24,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Autofocus for Event Cameras",
        "doi": "10.1109/CVPR52688.2022.01586",
        "authors": [
            "Shijie Lin",
            "Yinqiang Zhang",
            "Lei Yu",
            "Bin Zhou",
            "Xiaowei Luo",
            "Jia Pan"
        ],
        "abstract": "Focus control (FC) is crucial for cameras to capture sharp images in challenging real-world scenarios. The autofocus (AF) facilitates the FC by automatically adjusting the focus settings. However, due to the lack of effective AF methods for the recently introduced event cameras, their FC still relies on naive AF like manual focus adjustments, leading to poor adaptation in challenging real-world conditions. In particular, the inherent differences between event and frame data in terms of sensing modality, noise, and temporal resolutions bring many challenges in designing an effective AF method for event cameras. To address these challenges, we develop a novel event-based autofocus framework consisting of an event-specific focus measure called event rate (ER) and a robust search strategy called event-based golden search (EGS). To verify the performance of our method, we have collected an event-based autofocus dataset (EAD) containing well-synchronized frames, events, and focal positions in a wide variety of challenging scenes with severe lighting and motion conditions. The experiments on this dataset and additional real-world scenarios demonstrated the superiority of our method over state-of-the-art approaches in terms of efficiency and accuracy.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 5,
            "updated": "2025-06-12T14:07:43.729486"
        },
        {
            "source": "scholar",
            "count": 18,
            "updated": "2025-06-12T14:07:43.563973"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2203.12321"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9879264"
        },
        {
            "type": "project_page",
            "url": "https://eleboss.github.io/eaf_webpage/"
        }
    ],
    "full_name": "Event-based Autofocus Dataset (EAD)",
    "additional_metadata": {
        "optic": "Fujifilm D17x7.5B-YN1",
        "num_recordings": "28",
        "file_format": "aedat"
    },
    "bibtex": {
        "pages": "16323--16332",
        "year": 2022,
        "month": "jun",
        "author": "Lin, Shijie and Zhang, Yinqiang and Yu, Lei and Zhou, Bin and Luo, Xiaowei and Pan, Jia",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-08-19",
        "language": "en",
        "doi": "10.1109/CVPR52688.2022.01586",
        "url": "https://ieeexplore.ieee.org/document/9879264/",
        "isbn": "978-1-66546-946-3",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Autofocus for {Event} {Cameras}",
        "address": "New Orleans, LA, USA",
        "type": "inproceedings",
        "key": "lin_autofocus_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/j.sigpro.2010.12.017",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2000.903548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.308479",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.147706",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SSST.2004.1295702",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2019.2893427",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01256",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1002/(SICI)1097-0320(20000101)39:1<1::AID-CYTO2>3.0.CO;2-J",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCE.2003.1209511",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00230",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0167-8655(02)00152-6",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S1077-2014(03)00037-8",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patrec.2006.01.016",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBOT.1990.125976",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1002/cyto.990120302",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.proeng.2013.09.086",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-27272-2_35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FGCN.2008.139",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF00127822",
            "source": "crossref"
        },
        {
            "doi": "10.1049/ip-vis:20040395",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2008.924105",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2006.282641",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ins.2006.12.023",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2008.2008938",
            "source": "crossref"
        },
        {
            "doi": "10.21236/ADA266644",
            "source": "crossref"
        },
        {
            "doi": "10.1186/s13634-016-0368-5",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Intelligent autofocus",
            "source": "crossref"
        },
        {
            "title": "Adaptive shape from focus with an error estimation in light microscopy",
            "source": "crossref"
        },
        {
            "title": "Realtime, high-speed video decompression using a frame-and event-based davis sensor",
            "source": "crossref"
        },
        {
            "title": "Practical issues in pixel-based autofocusing for machine vision",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Enhanced autofocus algorithm using robust focus measure and fuzzy reasoning",
            "source": "crossref"
        },
        {
            "title": "Wavelet-based autofocusing and unsupervised segmentation of microscopic images",
            "source": "crossref"
        },
        {
            "title": "Sid-Ahmed. 3d shape from focus and depth map computation using steerable filters",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset was captured with a DAVIS346 using a motorized varifocal lens (Fujifilm D17x7.5B-YN1). Data was recorded under two lighting conditions (`dark` and `light`) and two different motion patterns (`dynamic` and `static`). The ground-truth focus was obtained by hand.

The dataset includes 28 sequences in four types of combination of lighting and motion conditions with 7 sequences for each type. The event-based data is provided in aedat, alongside images and Matlab files.

Note that a version of this dataset stored using `Numpy` is available from https://figshare.com/articles/dataset/Event-based_AF_Dataset_EAD_zip/22293763?file=39645481. However, this has not been verified to contain the same data.
