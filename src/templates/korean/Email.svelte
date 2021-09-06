<script>
  export let url;
  export let bugUrl;
</script>

<div>
  안녕하세요,
  <br /><br />
  저는 Mozilla Firefox 웹 브라우저 개발 엔지니어입니다.<br />
  Mozilla Firefox에서 귀사의 웹 페이지
  {@html url}
  가 제대로 작동하지 않는다는 보고가 있었습니다.<br /><br />
  저희 쪽에서 알아본 결과 웹사이트상 문제점을 발견하여, 해결을 위해 분석 결과를 공유드리려 합니다.
  <br />
  <br />이쪽 저희 버그 리포트 페이지에 상세 사항이 담겨 있습니다:

  {@html bugUrl}
  <br /><br />
  귀사의 담당자 또는 팀이 확인할 수 있도록 이 내용을 전달해 주실 수 있을지요?
  <br /><br />
  감사합니다.<br />
</div>
