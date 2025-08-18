---
{
    "name": "E-FAction",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition"
    ],
    "task": "Human Activity Recognition",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Paper links itself when introducing the E-FAction dataset.",
        "dataset_links": []
    },
    "paper": {
        "title": "Event-based Few-shot Fine-grained Human Action Recognition",
        "doi": "10.1109/IROS58592.2024.10801824",
        "authors": [
            "Zonglin Yang",
            "Yan Yang",
            "Yuheng Shi",
            "Hao Yang",
            "Ruikun Zhang",
            "Liu Liu",
            "Xinxiao Wu",
            "Liyuan Pan"
        ],
        "abstract": "Few-shot fine-grained human (FGH) action recognition is crucial in the context of human-robot interaction within open-set real-world environments. Existing works mainly focus on features extracted from RGB frames. However, their performances are drastically impacted in challenging scenarios, such as high-dynamic or low lighting conditions. Event cameras can independently and sparsely capture brightness changes in a scene at microsecond resolution and high dynamic range, which offer a promising solution. However, the modality differences between events and RGB frames, and the lack of paired fine-grained data hinder the development of event-based FGH action recognition. Therefore, in this paper, we introduce the first Event Camera Fine-grained Human Action (E-FAction) dataset. This dataset comprises 3304 paired \u2018event stream and RGB sequence\u2019, covering 15 coarse action classes and 128 fine-grained actions. Then, we develop a versatile event feature extractor. Considering the spatial sparsity of event stream, we design two modules to mine the temporal motion and semantic features under the guidance of paired RGB frames, facilitating robust weight initialization for the feature extractor in few-shot FGH action recognition. We conduct extensive experiments on both published and our built synthetic and real datasets, and consistently achieve state-of-the-art performance compared to existing baselines. Code and dataset will be available at link.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-07-11T08:20:17.237107"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-07-11T08:20:17.002913"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10801824"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Typistchen/SpikMamba"
        }
    ],
    "full_name": "Event Camera Fine-grained Human Action (E-FAction)",
    "additional_metadata": {
        "num_recordings": "1024",
        "num_classes": "128",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Artificial Intelligence, Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2410.16746 [cs]",
        "year": 2024,
        "month": "oct",
        "author": "Chen, Jiaqi and Yang, Yan and Deng, Shizhuo and Teng, Da and Pan, Liyuan",
        "publisher": "arXiv",
        "urldate": "2024-12-07",
        "language": "en",
        "doi": "10.48550/arXiv.2410.16746",
        "url": "http://arxiv.org/abs/2410.16746",
        "shorttitle": "{SpikMamba}",
        "title": "{SpikMamba}: {When} {SNN} meets {Mamba} in {Event}-based {Human} {Action} {Recognition}",
        "type": "misc",
        "key": "chen_spikmamba_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/IROS55552.2023.10341740",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01727",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01231-1_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s23115281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACVW54805.2022.00052",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00587",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV56688.2023.00254",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00982",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00269",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01146",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3300741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WF-IoT48130.2020.9221355",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS45731.2020.9181247",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v38i6.28372",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00637",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.2966058",
            "source": "crossref"
        },
        {
            "doi": "10.5555/3294996.3295163",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3007511",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00038",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126543",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3188400",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV57701.2024.00633",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00675",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00215",
            "source": "crossref"
        },
        {
            "title": "Learning transferable visual models from natural language supervision",
            "source": "crossref"
        },
        {
            "title": "Knowledge prompting for few-shot action recognition",
            "source": "crossref"
        },
        {
            "title": "Event-based action recognition using timestamp image encoding network",
            "source": "crossref"
        },
        {
            "title": "A closer look at few-shot video classification: A new baseline and benchmark",
            "source": "crossref"
        },
        {
            "title": "Ucf101: A dataset of 101 human actions classes from videos in the wild",
            "source": "crossref"
        },
        {
            "title": "Llava-next: Improved reasoning, ocr, and world knowledge",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "An image is worth 16x16 words: Transformers for image recognition at scale",
            "source": "crossref"
        },
        {
            "title": "The kinetics human action video dataset",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

The dataset uses the DAVIS346 event camera to capture 3304 action sequences in a resolution of 346×260 from real-world scenarios. The E-FAction dataset provides a challenging benchmark for recognizing fine-grained human actions, such as differentiating between ‘Power Walk’, ‘Jog’, and ‘Stroll’. All collection processes adhere to the aforementioned protocols, carried out by 10 action performers. The dataset is divided into training (60%), validation (15%), and testing (25%) sets, facilitating the development and evaluation of future event-based human action recognition models.

### Dataset Structure

- Contains 1024 recordings in 128 different classes.
