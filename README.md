웹 기반 개인 포트폴리오 관리 시스템
=================

### 포트폴리오란?
이력서와 자기소개서의 내용을 포함해 구체적이고 시각적으로 표현한 문서
* 이력 -> 지금까지 거쳐 온 학업, 직업, 경험 등의 내력
* 자기소개서 -> 본인을 소개하기 위한 목적으로 본인의 성장환경이나 장점들을 나열하여 타인에게 상세한 정보를 제공하고자 하는 문서

일반적으로 신입에게 업무적인 역량 -> 발전 가능성
신입에게 즉시 성과를 바라지 않고 또 즉시 성과를 내는 것이 흔한 일은 아니다.
따라서, 신입이 뭔가를 할 수 있다 -> 면접관들 입장에서는 한귀로 듣고 한귀로 흘리게 된다.
-> 그렇다면, 신입의 포트폴리오에서 업무적인 역량 == 지향하는 목표에 가깝다.

정의
-------
지금까지 거쳐 온 학업, 직업, 경험 등의 **내력**과 자신의 **업무적인 역량** 및 **이력에서 담지 못하는 자신의 장점**을 기록하여 관리

기능표
---------------------
<table>
    <tr>
        <td>기능</td>
        <td>세부설명</td>
        <td>비고</td>
    </tr>
    <tr>
        <td>수행 프로젝트 추가</td>
        <td>프로젝트 제목, 설명, 제작기간 등의 프로젝트에 대한 정보를 입력하여 저장</td>
        <td></td>
    </tr>
    <tr>
        <td>수행 프로젝트 수정</td>
        <td>이미 저장되어있는 수행 프로젝트 정보를 선택하여 내용을 수정</td>
        <td></td>
    </tr>
    <tr>
        <td>수행 프로젝트 삭제</td>
        <td>이미 저장되어있는 수행 프로젝트 정보를 선택하여 삭제</td>
        <td></td>
    </tr>
    <tr>
        <td>대외활동 추가</td>
        <td>대회 혹은 행사명과 주관 기간, 진행기간 등을 입력하여 대외활동 정보 추가</td>
        <td></td>
    </tr>
    <tr>
        <td>대외활동 수정</td>
        <td>이미 저장되어있는 대외활동 정보를 선택하여 내용을 수정</td>
        <td></td>
    </tr>
    <tr>
        <td>대외활동 삭제</td>
        <td>이미 저장되어있는 대외활동 정보를 선택하여 삭제</td>
        <td></td>
    </tr>
    <tr>
        <td>경력 추가</td>
        <td>직장명, 근무기간 등을 입력하여 경력 정보 추가</td>
        <td></td>
    </tr>
    <tr>
        <td>경력 수정</td>
        <td>이미 저장되어있는 경력 정보를 선택하여 내용 수정</td>
        <td></td>
    </tr>
    <tr>
        <td>경력 삭제</td>
        <td>이미 저장되어있는 경력 정보를 선택하여 삭제</td>
        <td></td>
    </tr>
    <tr>
        <td>자격증 추가</td>
        <td>자격명, 취득일자, 발급 기관을 입력하여 자격증에 대한 정보 추가</td>
        <td></td>
    </tr>
    <tr>
        <td>자격증 수정</td>
        <td>이미 저장되어있는 자격증 정보를 선택하여 내용 수정</td>
        <td></td>
    </tr>
    <tr>
        <td>자격증 삭제</td>
        <td>이미 저장되어있는 자격증 정보를 선택하여 삭제</td>
        <td></td>
    </tr>
    <tr>
        <td>어학 CRUD</td>
        <td>어학시험명, 점수, 취득일자를 입력받아 어학자격증 정보를 저장하고, 이미 저장된 내용을 조회, 수정, 삭제 가능</td>
        <td></td>
    </tr>
    <tr>
        <td>학력 CRUD</td>
        <td>(학사/석사/박사)과정 선택, 전공선택, (졸업 /재학/ 수료 / 중퇴) 선택, 학교명 입력, 재학기간, 학위 논문(논문명, 링크)(선택)을 입력하여 저장, 이미 저장된 내용을 조회, 수정, 삭제 가능</td>
        <td></td>
    </tr>
</table>

#### 이력 종류

1. 수행 프로젝트
    - 프로젝트 제목
    - 프로젝트 부제(선택)
    - 프로젝트에 대한 설명
        * 프로그램의 특징점 등
    - 제작 기간
    - PPT 파일
    - 소스코드
        * github 링크로 대체
2. 대내(외)활동
    - 대회, 행사명
    - 주관 기관
    - 진행기간
    - 수상 여부
    - 연관 프로젝트(선택)
3. 경력
    - 직장명
    - 근무기간
    - 근무부서
    - 담당업무
4. 자격증
    - 자격명
    - 취득일자
    - 발급기관
5. 어학
    - 어학시험명
    - 점수
    - 취득일자
6. 학력
    - 구분(학사 / 석사 / 박사)
    - 전공
    - 수학구분(졸업 / 재학 / 수료 / 중퇴)
    - 학교명
    - 재학기간
    - 학위 논문
        * 논문명
        * 링크

#### 이외 추가하면 좋을 수 있는 것
1. 연락처
    - 구분(전화번호 / E-mail / SNS)
    - 내용
2. 자기소개
    - 성격
    - 본인 사진
    - 이름
    - 목표(지향점)

<img src = "folio.jpg">

#### Table Design(Schema Level)

1. 수행 프로젝트(Projects) 
    - 프로젝트 식별번호(project_ID) not null, PK
    - 제목(title) not null
    - 부제(substitle)
    - 설명(exp.) not null
    - 제작 시작일(product_start) not null
    - 제작 종료일(product_finish) not null
    - PPT 첨부파일(ppts)
    - 소스코드(Code) not null


2. 대내(외)활동(Extracurricular activities) 
    - 대내(외)활동 식별번호(event_ID) not null, PK
    - 행사명(event_name) not null
    - 주관 기관(event_host) not null
    - 진행 시작일(event_start) not null
    - 진행 완료일(event_finish) not null
    - 수상 여부(Awarded) not null
    - 연관 프로젝트(Relation_Project) FK reference by Project.Project_ID


3. 경력(career) 
    - 경력 식별번호(career_ID) not null, PK
    - 직장명(workplace_name) not null
    - 근무 시작일(Work_start) not null
    - 근무 종료일(Work_finish) not null
    - 근무부서(career_depart.) not null
    - 담당업무(Responsibilities) not null


4. 자격증(certificate) 
    - 자격명(certificate_name) not null
    - 취득일자(certificated_date) not null
    - 발급기관(issuing_agency) not null


5. 어학 자격증(language_certificate) 
    - 어학시험명(lang_certi_name) not null
    - 점수(lang_score) not null
    - 취득일자(lang_certi_date) not null

6. 학력(education) 
    - 학위(degree) not null
    - 전공(education_depart.) not null
    - 수학구분(study_classification) not null
    - 학교명(Collage_name) not null
    - 입학일자(Entry_date) not null
    - 졸업(예정)일자(graduation_date) not null


7. 연락처(Contact) 
    - 구분(Contact_Classification) not null
    - 내용(address) not null


이력서생성기능
- 일정한 템플릿을 먼저 만들어 놓아야 한다.