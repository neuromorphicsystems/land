---
{
    "name": "DVS-CK+",
    "aliases": [
        "DVS-ADFES",
        "DVS-CASIA",
        "DVS-CK+",
        "DVS-MMI"
    ],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Facial Expression",
        "Face Detection"
    ],
    "description": "Conversions of Facial Expression Recognition datasets to events",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "The Github repository contains instructions on how to download and then convert conventional FES datasets. According to the Github page, modified/derived versions of those datasets cannot be distributed.",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Spiking-Fer: Spiking Neural Network for Facial Expression Recognition With Event Cameras",
        "doi": "10.1145/3617233.3617235",
        "authors": [
            "Sami Barchid",
            "Benjamin Allaert",
            "Amel Aissaoui",
            "Jos\u00e9 Mennesson",
            "Chaabane C Djeraba"
        ],
        "abstract": "Facial Expression Recognition (FER) is an active research domain that has shown great progress recently, notably thanks to the use of large deep learning models. However, such approaches are particularly energy intensive, which makes their deployment difficult for edge devices. To address this issue, Spiking Neural Networks (SNNs) coupled with event cameras are a promising alternative, capable of processing sparse and asynchronous events with lower energy consumption. In this paper, we establish the first use of event cameras for FER, named \"Event-based FER\", and propose the first related benchmarks by converting popular video FER datasets to event streams. To deal with this new task, we propose \"Spiking-FER\", a deep convolutional SNN model, and compare it against a similar Artificial Neural Network (ANN). Experiments show that the proposed approach achieves comparable performance to the ANN architecture, while consuming less energy by orders of magnitude (up to 65.39x). In addition, an experimental study of various event-based data augmentation techniques is performed to provide insights into the efficient transformations specific to event-based FER.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 9,
            "updated": "2025-09-01T06:42:16.791510"
        },
        {
            "source": "scholar",
            "count": 24,
            "updated": "2025-09-01T06:42:18.361271"
        }
    ],
    "links": [
        {
            "type": "github_page",
            "url": "https://github.com/Barchid/spiking-fer"
        },
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/abs/10.1145/3617233.3617235"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1016/j.neucom.2022.05.077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP46576.2022.9898061",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app9214678",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2021.3067593",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app10062024",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.jpdc.2019.07.007",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/97",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-04667-4_18",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00277",
            "source": "crossref"
        },
        {
            "doi": "10.5281/zenodo.5079802",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TAFFC.2020.2981446",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2010.5543262",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2931595",
            "source": "crossref"
        },
        {
            "doi": "10.3390/sym11010052",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2005.1521424",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3129120",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00682",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2017.2761740",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00530-020-00663-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.58337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01006",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3131345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.imavis.2011.07.002",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "collection": "CBMI 2023",
        "pages": "1\u20137",
        "month": "sep",
        "year": 2023,
        "author": "Barchid, Sami and Allaert, Benjamin and Aissaoui, Amel and Mennesson, Jos\u00e9 and Djeraba, Chaabane C",
        "publisher": "ACM",
        "booktitle": "20th International Conference on Content-based Multimedia Indexing",
        "doi": "10.1145/3617233.3617235",
        "url": "http://dx.doi.org/10.1145/3617233.3617235",
        "title": "Spiking-Fer: Spiking Neural Network for Facial Expression Recognition With Event Cameras",
        "series": "CBMI 2023",
        "type": "inproceedings",
        "key": "Barchid_2023"
    }
}
---

## Dataset Description

Each video of a given Facial Expression Recognition dataset is processed by two successive steps. The first step is a standardization of all frames such that the face of the represented subject is cropped and rotated based on 68 facial landmarks and converted to grayscale. Then, the resulting frame is resized to a resolution of (200 × 200). The second step corresponds to the conversion of the standardized video into events using v2e.

The original video datasets used to create the event-based version are available on their respective websites:
- MMI: https://mmifacedb.eu/
- CASIA: https://www.oulu.fi/en/university/faculties-and-units/faculty-information-technology-and-electrical-engineering/center-machine-vision-and-signal-analysis.
- CK+: http://www.jeffcohn.net/Resources/.
- ADFES: https://aice.uva.nl/research-tools/adfes-stimulus-set/adfes-stimulus-set.html?cb.

The modified datasets are not directly distributed, however instructions on how to convert the datasets are provided in the Github repository.